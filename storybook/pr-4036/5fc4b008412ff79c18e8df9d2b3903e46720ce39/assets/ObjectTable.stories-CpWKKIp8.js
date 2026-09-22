import{j as i}from"./iframe-SIMpA4b3.js";import{O as p}from"./object-table-BB3Ya4ql.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DHViH3E2.js";import"./preload-helper-u9tSabE5.js";import"./Table-BjzMLano.js";import"./index-CgEuHlu2.js";import"./Dialog-BBRxEOgL.js";import"./cross-A4PXp8OO.js";import"./svgIconContainer-Bv-MZKBZ.js";import"./useBaseUiId-Cayh95iR.js";import"./InternalBackdrop-BjdByZt4.js";import"./composite-BiHSWJxn.js";import"./index-DIMo0kF5.js";import"./index-BOG0Gn7K.js";import"./index-DByXNkAP.js";import"./useEventCallback-ek73AKE3.js";import"./SkeletonBar-CONPnUxb.js";import"./LoadingCell-gqdEkAd9.js";import"./ColumnConfigDialog-DxA9qQeo.js";import"./DraggableList-BmNlZwM9.js";import"./search-94czUh6x.js";import"./Input-DI62ffjf.js";import"./useControlled-aXvE1NEk.js";import"./Button-DePizqiT.js";import"./small-cross-vpu9zUmA.js";import"./ActionButton-Cn9bBLTs.js";import"./Checkbox-DZGiW7UX.js";import"./useValueChanged-6XUEwvLB.js";import"./CollapsiblePanel-fOVUAOYi.js";import"./MultiColumnSortDialog-C_oWOlUB.js";import"./MenuTrigger-BiJqZYIa.js";import"./CompositeItem-CnRf7Dd6.js";import"./ToolbarRootContext-B55ymUvU.js";import"./getDisabledMountTransitionStyles-DJHymdjY.js";import"./getPseudoElementBounds-BOBP5ItM.js";import"./chevron-down-D2KA7jZq.js";import"./index-uzBTaDFQ.js";import"./error-CGNw4dMZ.js";import"./BaseCbacBanner-BP0Cqn0m.js";import"./makeExternalStore-DPGOJSPa.js";import"./Tooltip-CJ-HIpsM.js";import"./PopoverPopup-KmvLih8v.js";import"./debounce-DKuXkfuK.js";import"./useOsdkClient-BVwhdVV0.js";import"./tick-D3sBJRzy.js";import"./DropdownField-DrtQyHqD.js";import"./isEqual-B3AMbcSK.js";import"./withOsdkMetrics-DYZT3YgQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
