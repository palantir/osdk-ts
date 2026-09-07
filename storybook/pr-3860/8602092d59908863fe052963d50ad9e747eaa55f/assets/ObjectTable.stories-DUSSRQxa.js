import{j as i}from"./iframe-CCkfybyg.js";import{O as p}from"./object-table-DMTp0K-l.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bi1oTegG.js";import"./preload-helper-DsTZDItY.js";import"./Table-Z-R_C2hG.js";import"./index-CRuKazN2.js";import"./Dialog-MmA162M3.js";import"./cross-DztAW50z.js";import"./svgIconContainer-D9rYUMKl.js";import"./useBaseUiId-D3c2AYue.js";import"./InternalBackdrop-CH7ryVyq.js";import"./composite-CvsgNL3g.js";import"./index-BjdCoA9s.js";import"./index-DK7vLZsC.js";import"./index-Do3A9MVL.js";import"./useEventCallback-BgAFC_QA.js";import"./SkeletonBar-BMsuO8JO.js";import"./LoadingCell-DtiPHZpw.js";import"./ColumnConfigDialog-BsOa_CPW.js";import"./DraggableList-CNVAwS51.js";import"./search-DY10Czwo.js";import"./Input-fn0miJxb.js";import"./useControlled-B0KHjJp9.js";import"./Button-Dk9snPZU.js";import"./small-cross-u-20rzxu.js";import"./ActionButton-D9UWUs4Y.js";import"./Checkbox-D7wfngpt.js";import"./useValueChanged-CkOiuysc.js";import"./CollapsiblePanel-CznC1jF2.js";import"./MultiColumnSortDialog-DT6kojV0.js";import"./MenuTrigger-DKZy1Z77.js";import"./CompositeItem-C3VXcNTq.js";import"./ToolbarRootContext-BENsoGE2.js";import"./getDisabledMountTransitionStyles-YVJprRnT.js";import"./getPseudoElementBounds-DalpdOin.js";import"./chevron-down-BUd5pETS.js";import"./index-BSEK-fsb.js";import"./error-aAb7DCQN.js";import"./BaseCbacBanner-CyRxcSDR.js";import"./makeExternalStore-CGDWyW6x.js";import"./Tooltip-CNLJ0cIh.js";import"./PopoverPopup-TyAfAF2x.js";import"./debounce-tod5D_FM.js";import"./useOsdkClient-CkBZw2Yo.js";import"./tick-CwY60cin.js";import"./DropdownField-DvWOBtdg.js";import"./isEqual-Byamabbu.js";import"./withOsdkMetrics-CC5JIT8j.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
