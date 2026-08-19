import{j as i}from"./iframe-BrGo9N9-.js";import{O as p}from"./object-table-Bi_LN2NS.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BLPihh0x.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D_Jn-Q8N.js";import"./index-jSRXXJ9w.js";import"./Dialog-AY3J_z1T.js";import"./cross-CqGcj1UP.js";import"./svgIconContainer-C2wfJlD0.js";import"./useBaseUiId-DRzpYMsL.js";import"./InternalBackdrop-H-W5c9Tc.js";import"./composite-BaZ5NPlu.js";import"./index-DDVUHOhP.js";import"./index-0jm5AiV8.js";import"./index-D_R5KUUI.js";import"./useEventCallback-CjQgYfgn.js";import"./SkeletonBar-CTB96FiY.js";import"./LoadingCell-DhKZJqLA.js";import"./ColumnConfigDialog-BEWosdsI.js";import"./DraggableList-DYw0g3m7.js";import"./search-BU8Oy9oR.js";import"./Input-DwliOy2I.js";import"./useControlled-BYX3tO_t.js";import"./Button-lkehQ9sU.js";import"./small-cross-BV2K9RPo.js";import"./ActionButton-BeguVoFM.js";import"./Checkbox-DH6yRrvl.js";import"./useValueChanged-COlcOgxu.js";import"./CollapsiblePanel-DkIS-X1G.js";import"./MultiColumnSortDialog-COK6ImCv.js";import"./MenuTrigger-B_YPwqIO.js";import"./CompositeItem-CK4axcp7.js";import"./ToolbarRootContext-DalYOUw7.js";import"./getDisabledMountTransitionStyles-DHm4QR3G.js";import"./getPseudoElementBounds-DYIfKLY8.js";import"./chevron-down-oLGHrpyq.js";import"./index-DtdHIG9x.js";import"./error-DfpVQDIj.js";import"./BaseCbacBanner-BxhdxHoy.js";import"./makeExternalStore-CajjYTod.js";import"./Tooltip-B_6YM8Q6.js";import"./PopoverPopup-qFUKYGhR.js";import"./debounce-B1TxOqEe.js";import"./useOsdkClient-Skidvwv_.js";import"./tick-HO2XmYO7.js";import"./DropdownField-CSmWHkMO.js";import"./isEqual-DIYgUhnB.js";import"./withOsdkMetrics-CWKbU0FT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
