import{j as i}from"./iframe-DOCCiOHb.js";import{O as p}from"./object-table-B0uLTA8o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DmJbmpo0.js";import"./preload-helper-DEzHRj9g.js";import"./Table-J8qOn0Hc.js";import"./index-DFEU0Jwo.js";import"./Dialog-BhmkZryF.js";import"./cross-CovJ-Ed5.js";import"./svgIconContainer-YIAf9TsP.js";import"./useBaseUiId-CmMkAyyf.js";import"./InternalBackdrop-Q7qmqEtO.js";import"./composite-BMmhh7vl.js";import"./index-N99qDbDS.js";import"./index-Bzy6XCyL.js";import"./index-CXkfJFVw.js";import"./useEventCallback-BzaGM4MH.js";import"./SkeletonBar-BhSZuKxj.js";import"./LoadingCell-CdVpnYtm.js";import"./ColumnConfigDialog-BB4El2Oj.js";import"./DraggableList-C327NS2l.js";import"./search-jcgG9auT.js";import"./Input-DWi-pbfP.js";import"./useControlled-BoZB2Z05.js";import"./Button-hwj6n_zT.js";import"./small-cross-7N7OEMcX.js";import"./ActionButton-B_DrTRR5.js";import"./Checkbox-D7RN9NDz.js";import"./useValueChanged-CW1n9jex.js";import"./CollapsiblePanel-BwQQQfcz.js";import"./MultiColumnSortDialog-lHb0H5EV.js";import"./MenuTrigger-jNL57hY0.js";import"./CompositeItem-CJrNoZr7.js";import"./ToolbarRootContext-P0D27WeH.js";import"./getDisabledMountTransitionStyles-BrQ12pz7.js";import"./getPseudoElementBounds-C34O99e7.js";import"./chevron-down-mVjqXGxr.js";import"./index-B_3m-f6U.js";import"./error-i9ATQSBy.js";import"./BaseCbacBanner-B_wA-DIw.js";import"./makeExternalStore-BqzO6RPd.js";import"./Tooltip-CNQ2W6HW.js";import"./PopoverPopup-D-Z3Cy_4.js";import"./debounce-CFnyKU3r.js";import"./useOsdkClient-B5sy_4Oo.js";import"./tick-Dn82gyrG.js";import"./DropdownField-rPN4VZoE.js";import"./isEqual-CGrVjf68.js";import"./withOsdkMetrics-DDYX4AYy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
