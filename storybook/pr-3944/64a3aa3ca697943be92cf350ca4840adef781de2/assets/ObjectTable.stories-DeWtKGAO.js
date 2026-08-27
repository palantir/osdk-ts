import{j as i}from"./iframe-Cg0_L8_P.js";import{O as p}from"./object-table-B-9OZqwa.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BVGFod7I.js";import"./preload-helper-33U0KAdV.js";import"./Table-DJplo8Y0.js";import"./index-DVyjubzR.js";import"./Dialog-C1SmuhvF.js";import"./cross-DAELvuCc.js";import"./svgIconContainer-Dm8ems_M.js";import"./useBaseUiId-DdUu1ljw.js";import"./InternalBackdrop-BypdOSoa.js";import"./composite-BAsr8Kap.js";import"./index-D5kIdvoW.js";import"./index-F9588Jdm.js";import"./index-CtQbOQUW.js";import"./useEventCallback-Dl8nzHTR.js";import"./SkeletonBar-CBLydHyO.js";import"./LoadingCell-BnGpV3tZ.js";import"./ColumnConfigDialog-BHP2AHg_.js";import"./DraggableList-BjEn8ROr.js";import"./search-CTHwA6lI.js";import"./Input-9fPQvd0v.js";import"./useControlled-mwHcpce3.js";import"./Button-8z5S-ilA.js";import"./small-cross-omF_0Y8F.js";import"./ActionButton-CY3H8CFl.js";import"./Checkbox-DHymW5dK.js";import"./useValueChanged-Di6pRa7v.js";import"./CollapsiblePanel-Cfw-oLP0.js";import"./MultiColumnSortDialog-WcO-MkJm.js";import"./MenuTrigger-CqGEFSvm.js";import"./CompositeItem-BnttgNWt.js";import"./ToolbarRootContext-B_XnRMpQ.js";import"./getDisabledMountTransitionStyles-BGMI7KAB.js";import"./getPseudoElementBounds-BEkVLoht.js";import"./chevron-down-CVB5EJv3.js";import"./index-CgP5jim8.js";import"./error-DwBuGVBZ.js";import"./BaseCbacBanner-ChMnFPZB.js";import"./makeExternalStore-El_-ZWlA.js";import"./Tooltip-kBlpZsgK.js";import"./PopoverPopup-C_LJ3T_c.js";import"./debounce-mldfpFwY.js";import"./useOsdkClient-B4CwtZLv.js";import"./tick-DRrKLY-r.js";import"./DropdownField-BqNokkFu.js";import"./isEqual-C-oocag7.js";import"./withOsdkMetrics-CULSkWk0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
