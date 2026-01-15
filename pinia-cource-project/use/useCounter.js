// imports
import { reactive, watch, computed, nextTick } from "vue";

// аналоговый способ сохранения данных
// вынесено за функцию, чтобы не обновлялось
const counterData = reactive({
  // реактивные данные
  counter: 0,
  counterTitle: "My Counter",
});

export function useCounter() {
  watch(
    () => counterData.counter, // ожидание ивента изменения именно этого значения
    (newCount) => {
      // в скобках может быть не только новое, но и старое значение через запятую
      if (newCount === 20) {
        alert("Congrads! The value is 20");
      }
    }
  );

  const numberEvenness = computed(() => {
    return counterData.counter % 2 === 0 ? "even" : "odd";
  });

  const increaseCounter = async (amount, event) => {
    console.log(event);
    counterData.counter += amount;

    await nextTick(); // ждет пока DOM обновит действие и делает свою часть
    console.log("nextTick, the value was updated");
    // nextTick(() => {
    //   do smth
    // });
  };
  const decreaseCounter = (amount) => {
    console.log(amount);
    counterData.counter -= amount;
  };

  return {
    counterData,
    numberEvenness,
    increaseCounter,
    decreaseCounter,
  };
}
