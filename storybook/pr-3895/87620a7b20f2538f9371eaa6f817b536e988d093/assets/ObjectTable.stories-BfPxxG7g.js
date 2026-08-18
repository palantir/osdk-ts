import{j as i}from"./iframe-CDIPB7O4.js";import{O as p}from"./object-table-CBk3FT5C.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-S9eKla.js";import"./preload-helper-DWohjKyq.js";import"./Table-BIigbOGi.js";import"./index-DpqBc055.js";import"./Dialog-SLdFailw.js";import"./cross-DWpFnAxd.js";import"./svgIconContainer-CpRq1kzn.js";import"./useBaseUiId-C53ArP71.js";import"./InternalBackdrop-B9qLr-oe.js";import"./composite-DJpplRBW.js";import"./index-CyMDaR8V.js";import"./index-CKl1c7mw.js";import"./index-DfdGKi8-.js";import"./useEventCallback-DtgIzVYv.js";import"./SkeletonBar-C617US_K.js";import"./LoadingCell-Btgdba_1.js";import"./ColumnConfigDialog-DiXfJIxg.js";import"./DraggableList-CT_M4ECH.js";import"./search-CSd5Haqi.js";import"./Input-B0582SQt.js";import"./useControlled-OIS9RNuC.js";import"./Button-1JczBYxA.js";import"./small-cross-B3Py6K7e.js";import"./ActionButton-B9qD19Gh.js";import"./Checkbox-Bj9DElAv.js";import"./useValueChanged-CvK1p4tX.js";import"./CollapsiblePanel-D70kK-yy.js";import"./MultiColumnSortDialog-E4pJ9M9E.js";import"./MenuTrigger-9NRzM_p-.js";import"./CompositeItem-DHFrcPLh.js";import"./ToolbarRootContext-XxXzxguL.js";import"./getDisabledMountTransitionStyles-CbbCvZI5.js";import"./getPseudoElementBounds-DIxCtFOg.js";import"./chevron-down-DWvOUDyV.js";import"./index-DDzNSFgX.js";import"./error-Q-7f-CPI.js";import"./BaseCbacBanner-ndkTyjjH.js";import"./makeExternalStore-_11RJNTd.js";import"./Tooltip-6qjUPNzc.js";import"./PopoverPopup-iLz8vspv.js";import"./debounce-Cr7GiNN5.js";import"./useOsdkClient-CbwMPEBp.js";import"./tick-C6XXwnGc.js";import"./DropdownField-DpCCQaoa.js";import"./isEqual-Bvcs_cF6.js";import"./withOsdkMetrics-DDUsb1yp.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
