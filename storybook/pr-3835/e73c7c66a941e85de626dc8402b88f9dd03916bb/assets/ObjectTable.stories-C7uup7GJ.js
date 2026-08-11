import{j as i}from"./iframe-yE_ETOHr.js";import{O as p}from"./object-table-BjhZj-tz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-YuuHOt6B.js";import"./preload-helper-o6WvwBPl.js";import"./Table-B_nuRyzL.js";import"./index-D1aMrwQT.js";import"./Dialog-B1J12Dvj.js";import"./cross-BNS_XELI.js";import"./svgIconContainer-DmRPPlT8.js";import"./useBaseUiId-DRDeEW1q.js";import"./InternalBackdrop-B-FAyfTG.js";import"./composite-DwgnebsF.js";import"./index-D1PfGPZb.js";import"./index-xOQiG_tn.js";import"./index-BsSjW-k_.js";import"./useEventCallback-qSc14G5u.js";import"./SkeletonBar-RaH0ddqY.js";import"./LoadingCell-D8tQGlu0.js";import"./ColumnConfigDialog-DQj-JRN2.js";import"./DraggableList-DcunIk8q.js";import"./search-Dmjh9lBr.js";import"./Input-CCmIVrO8.js";import"./useControlled-DKJFXIxk.js";import"./isEqual-Dvhw8L28.js";import"./isObject-DIgVF9AU.js";import"./Button-k0rMWkk9.js";import"./ActionButton-rUgKZnwm.js";import"./Checkbox-CpqF5CUK.js";import"./useValueChanged-B7Z22nGK.js";import"./CollapsiblePanel-DopAfRD9.js";import"./MultiColumnSortDialog-w6hAw1Rf.js";import"./MenuTrigger-DmPE_jns.js";import"./CompositeItem-B15H_S00.js";import"./ToolbarRootContext-CIeM8gUf.js";import"./getDisabledMountTransitionStyles-CmWzICwb.js";import"./getPseudoElementBounds-Df6p-cDj.js";import"./chevron-down-CFTHRzae.js";import"./index-DFlEw2oQ.js";import"./error-DWwlREAa.js";import"./BaseCbacBanner-BmwoVVw8.js";import"./makeExternalStore-D8THS2fM.js";import"./Tooltip-C5N5ugXu.js";import"./PopoverPopup--km0kfjJ.js";import"./toNumber-CpigVrms.js";import"./useOsdkClient-CAzVrqZU.js";import"./tick-CmdWWdcU.js";import"./DropdownField-VyZsug_6.js";import"./withOsdkMetrics-DnRB_DeO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
