---
"@osdk/client": patch
---

Refactor Observable Client with enhanced observer architecture

- Restructure observable implementation with dedicated observer classes (LinkObservers, ListObservers, ObjectObservers)
- Improve type safety for link observation operations with enhanced generic constraints
- Add QuerySubscription and UnsubscribableWrapper for better encapsulation
- Maintain API compatibility while improving internal architecture
