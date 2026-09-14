import{j as i}from"./iframe-DcH5xezC.js";import{O as p}from"./object-table-CCvnPiSH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vJF9YFWg.js";import"./preload-helper-zu47KBbI.js";import"./Table-Dy9KocsG.js";import"./index-DbAD30nX.js";import"./Dialog-B5-mrXFN.js";import"./cross-Chd2V34f.js";import"./svgIconContainer-B5leceMR.js";import"./useBaseUiId-Bbtq32g0.js";import"./InternalBackdrop-DyFOy9BL.js";import"./composite-DA4kpS88.js";import"./index-DRxO555y.js";import"./index-B91Y8CCx.js";import"./index--Rg5YMM0.js";import"./useEventCallback-CLRIu-kV.js";import"./SkeletonBar-CrKV3y2b.js";import"./LoadingCell-CWgQfXVP.js";import"./ColumnConfigDialog-CNCkRvcG.js";import"./DraggableList-BZ5chcCZ.js";import"./search-BF1ckEWB.js";import"./Input-CHJLRFkf.js";import"./useControlled-BYauL-0P.js";import"./Button-DWi0EVGU.js";import"./small-cross-VAMEtZ-6.js";import"./ActionButton-CqL2_MDd.js";import"./Checkbox-rpNWgGoa.js";import"./useValueChanged-CM-EGciU.js";import"./CollapsiblePanel-D0_hAvFL.js";import"./MultiColumnSortDialog-jPjtDQhP.js";import"./MenuTrigger-L8QBqhYV.js";import"./CompositeItem-D4A9PZVo.js";import"./ToolbarRootContext-DDNTKhTz.js";import"./getDisabledMountTransitionStyles-DP9RwCAa.js";import"./getPseudoElementBounds-Dlvy_Xcp.js";import"./chevron-down-cNoDE_3k.js";import"./index-C7e3Vf0D.js";import"./error-BKi4y-Uw.js";import"./BaseCbacBanner-Bq_TsmNs.js";import"./makeExternalStore-DyQTnfpK.js";import"./Tooltip-DJvrdrIe.js";import"./PopoverPopup-Bkoo-Q_-.js";import"./debounce-CGWpxv8T.js";import"./useOsdkClient-D5k8Tf4N.js";import"./tick-JU-3FL-Z.js";import"./DropdownField-CrN4lGdi.js";import"./isEqual-BqvZfAJd.js";import"./withOsdkMetrics-BohsC0KD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
