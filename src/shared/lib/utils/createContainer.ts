"use client";
type Options = { id: string; mountNode?: HTMLElement };

export function createContainer(options: Options) {
  const { id, mountNode = document.body } = options;
  if (document.getElementById(id)) return;
  const container = document.createElement("div");
  container.setAttribute("id", id);
  mountNode.appendChild(container);
  return container;
}
