import{j as i}from"./iframe-C66sw3ty.js";import{O as p}from"./object-table-Bo9aKKXl.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6CzVfJc.js";import"./preload-helper-DZbI0FD0.js";import"./Table-C6d_12eT.js";import"./index-BuRhXxal.js";import"./Dialog-DFj3izS1.js";import"./cross-CtqOkK2i.js";import"./svgIconContainer-3jplA0Kn.js";import"./useBaseUiId-DBc-RpeK.js";import"./InternalBackdrop-DsXWEq-Z.js";import"./composite-DJt-rmmG.js";import"./index-DktJo0Qz.js";import"./index-RHZtAXiM.js";import"./index-B1xoON_r.js";import"./useEventCallback-cwcFVblP.js";import"./SkeletonBar-BoZ9OWi7.js";import"./LoadingCell-DpwcDvSb.js";import"./ColumnConfigDialog-DFflbHeg.js";import"./DraggableList-Aaqmor-j.js";import"./search-wv5WYUCG.js";import"./Input-BELQ9o_j.js";import"./useControlled-CCfgbEmE.js";import"./Button-CWXPJ_o4.js";import"./small-cross-Bbh8r9v-.js";import"./ActionButton-DQZCWw5O.js";import"./Checkbox-CWlOLNCz.js";import"./useValueChanged-C8NPc9BR.js";import"./CollapsiblePanel-B4_OSaf8.js";import"./MultiColumnSortDialog-BABDbYoQ.js";import"./MenuTrigger-Cm6MZfrt.js";import"./CompositeItem-DcBovePw.js";import"./ToolbarRootContext-BbxUlGdK.js";import"./getDisabledMountTransitionStyles-O1hZJ6Rw.js";import"./getPseudoElementBounds-YoXHtRnz.js";import"./chevron-down-rq5FhUz6.js";import"./index-Dmy2BarC.js";import"./error-Dxtk7pI5.js";import"./BaseCbacBanner-BaGj0VXE.js";import"./makeExternalStore-CY5Weqo3.js";import"./Tooltip-DtZVn1rC.js";import"./PopoverPopup-CHN0N4y0.js";import"./debounce-BHah8sqq.js";import"./useOsdkClient-BtN-BmFc.js";import"./tick-C7kRszHF.js";import"./DropdownField-CM8S71Dz.js";import"./isEqual-zIn-vV4k.js";import"./withOsdkMetrics-CGetGeS2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
