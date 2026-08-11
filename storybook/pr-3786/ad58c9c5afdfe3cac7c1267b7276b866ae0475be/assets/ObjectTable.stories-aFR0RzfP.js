import{j as i}from"./iframe-BUj1CfXg.js";import{O as p}from"./object-table-DyKvR0rE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BXdj0yqH.js";import"./preload-helper-DZ45QRbv.js";import"./Table-CWSTK4rq.js";import"./index-NBVyoVsZ.js";import"./Dialog-B_j-bdOZ.js";import"./cross-DlyIjemV.js";import"./svgIconContainer-MYfqGk3H.js";import"./useBaseUiId-DaOhoyrU.js";import"./InternalBackdrop-DzPAcrCS.js";import"./composite-BkdiVfPs.js";import"./index-C1gw1Q5a.js";import"./index-B4P9wCIh.js";import"./index-CQceiGqI.js";import"./useEventCallback-BbRR7V1i.js";import"./SkeletonBar-DtLmqaeu.js";import"./LoadingCell--ZKV-a4a.js";import"./ColumnConfigDialog-Bq93dVdv.js";import"./DraggableList-BR-zSyBl.js";import"./search-CeD93pBN.js";import"./Input-BTDiXSNB.js";import"./useControlled-BjYCZfKY.js";import"./isEqual-CU5FZwCW.js";import"./isObject-C_gfn-Rb.js";import"./Button-B5y7ZCvT.js";import"./ActionButton-BmWBQE9y.js";import"./Checkbox-BHMj1n9f.js";import"./useValueChanged-RokLUTbm.js";import"./CollapsiblePanel-fD7arT3b.js";import"./MultiColumnSortDialog-B51pu96z.js";import"./MenuTrigger-HGKcp2Gy.js";import"./CompositeItem-C-wl7l8I.js";import"./ToolbarRootContext-BFvRmjuo.js";import"./getDisabledMountTransitionStyles-DUFQ-qCZ.js";import"./getPseudoElementBounds-BnMLzqS4.js";import"./chevron-down-DgAFPu4M.js";import"./index-BXPBNZV3.js";import"./error-peAS9X8o.js";import"./BaseCbacBanner-r6BnHO-C.js";import"./makeExternalStore-CN2SCzrt.js";import"./Tooltip-Byi-ofNp.js";import"./PopoverPopup-C7JRc8oc.js";import"./toNumber-CpnBpuJd.js";import"./useOsdkClient-k-jR9e5k.js";import"./tick-8bw-0Y7b.js";import"./DropdownField-BWBqfaQX.js";import"./withOsdkMetrics-CXkSfRrz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
