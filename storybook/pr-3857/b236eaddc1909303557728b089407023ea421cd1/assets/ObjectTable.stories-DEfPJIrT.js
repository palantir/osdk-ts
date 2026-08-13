import{j as i}from"./iframe-C8cvGscG.js";import{O as p}from"./object-table-Bl9llTCt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-mm8OQQ.js";import"./preload-helper-DC1YHagZ.js";import"./Table-BVcwqCvL.js";import"./index-D4FQYl0T.js";import"./Dialog-RKsRHohX.js";import"./cross-CprIKEkv.js";import"./svgIconContainer-D4IADJhB.js";import"./useBaseUiId-CTQW4Qod.js";import"./InternalBackdrop-BV3x9fEB.js";import"./composite-BI_-Y8ZI.js";import"./index-Cv_Heaoa.js";import"./index-oJ8Xwr6M.js";import"./index-B2ai54ZH.js";import"./useEventCallback-DsFzeAUD.js";import"./SkeletonBar-cjwpOSyO.js";import"./LoadingCell-Dd5UKK1z.js";import"./ColumnConfigDialog-Cg99CLu5.js";import"./DraggableList-CcV87Ef7.js";import"./search-DscZjBaM.js";import"./Input-4ZH7Uf17.js";import"./useControlled-DPYDb1X5.js";import"./Button-s9umFZ1s.js";import"./small-cross-DIzXOG7S.js";import"./ActionButton-QzUJAPB3.js";import"./Checkbox-BmClsKng.js";import"./useValueChanged-QH4DQ2zL.js";import"./CollapsiblePanel-5tt-I1EX.js";import"./MultiColumnSortDialog-vSwuKr4r.js";import"./MenuTrigger-DU4NXXCA.js";import"./CompositeItem-CZOJvSSZ.js";import"./ToolbarRootContext-DOPDMGFM.js";import"./getDisabledMountTransitionStyles-EkzwfJQM.js";import"./getPseudoElementBounds-BljzcTzT.js";import"./chevron-down-Bg2Fi8_v.js";import"./index-BTdV_y6h.js";import"./error-BmJxtr8m.js";import"./BaseCbacBanner-3TLBV2iJ.js";import"./makeExternalStore-a9HEG5rq.js";import"./Tooltip-BO4BL-3C.js";import"./PopoverPopup-D6rFG9a_.js";import"./toNumber-DmqLeUcD.js";import"./useOsdkClient-BOTALPg3.js";import"./tick-Dq7YPYRG.js";import"./DropdownField-BoUvaA8o.js";import"./withOsdkMetrics-Bep4H7WL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,le={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ue=["Default"];export{n as Default,ue as __namedExportsOrder,le as default};
