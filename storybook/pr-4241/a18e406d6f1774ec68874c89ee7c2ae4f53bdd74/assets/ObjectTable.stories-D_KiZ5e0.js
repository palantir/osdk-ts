import{j as i}from"./iframe-BZfq9wpL.js";import{O as p}from"./object-table-DoWPZlVv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C9v4VDHd.js";import"./preload-helper-AwKDT_jv.js";import"./Table-td4H65UV.js";import"./index-D9gasGy7.js";import"./Dialog-BOiQVGkU.js";import"./cross-D_01sNtm.js";import"./svgIconContainer-DnXANREi.js";import"./useBaseUiId-CAA3ipMR.js";import"./InternalBackdrop-C2xaKMNu.js";import"./composite-bZwVCSrk.js";import"./index-DsxnygA5.js";import"./index-Bh2MExip.js";import"./index-C8SZO2gW.js";import"./useEventCallback--L1JDqNv.js";import"./SkeletonBar-CG-4yXUZ.js";import"./LoadingCell-DKI8FSP7.js";import"./ColumnConfigDialog-CalvApPI.js";import"./DraggableList-Cmkt9XM4.js";import"./search-CGtWdQTA.js";import"./Input-CYqif1zS.js";import"./useControlled-mhuNXue2.js";import"./Button-RoczPdix.js";import"./small-cross-DtYxU9Mt.js";import"./ActionButton-BfVU8-_V.js";import"./Checkbox-DLVq20_m.js";import"./useValueChanged-DXG9ZF3t.js";import"./CollapsiblePanel-X8A3X9xp.js";import"./MultiColumnSortDialog-FWsXtXEV.js";import"./MenuTrigger-CmaqcMU6.js";import"./CompositeItem-DdBNHL7r.js";import"./ToolbarRootContext-BAhtauIS.js";import"./getDisabledMountTransitionStyles-CXARh1iQ.js";import"./getPseudoElementBounds-Nz_xFNM1.js";import"./chevron-down-BnbfleEH.js";import"./index-CYqzX_VE.js";import"./error-Dm15EuC9.js";import"./BaseCbacBanner-CWsnq_cD.js";import"./makeExternalStore-BV40BoeT.js";import"./Tooltip-DkzPkwJ6.js";import"./PopoverPopup-CQlRUOAW.js";import"./debounce-CRuMKiUh.js";import"./useOsdkClient-De89dM9U.js";import"./tick-BFLAooRA.js";import"./DropdownField-B-E6juK1.js";import"./isEqual-BK7_lR_a.js";import"./withOsdkMetrics-BHMRNcoi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
