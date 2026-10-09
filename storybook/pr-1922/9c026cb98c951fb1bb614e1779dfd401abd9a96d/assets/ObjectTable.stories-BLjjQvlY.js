import{j as i}from"./iframe-DX-l5oxf.js";import{O as p}from"./object-table-CMeRtf6m.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-MRp6jtXn.js";import"./preload-helper-BOWhuEYI.js";import"./Table-D8LXq3-7.js";import"./index-hUdVkOSF.js";import"./Dialog-C1obDNrb.js";import"./cross-DToDNxNQ.js";import"./svgIconContainer-DSaf8hGr.js";import"./useBaseUiId-BTelihs1.js";import"./InternalBackdrop-DD9gAX9c.js";import"./composite-DHW7DpWZ.js";import"./index-CvzBQu91.js";import"./index-DKU9qBjC.js";import"./index-BDesfFDk.js";import"./useEventCallback-lUzYahFI.js";import"./SkeletonBar-Dxx28Vqn.js";import"./LoadingCell-ByCc7EKm.js";import"./ColumnConfigDialog-BPZNMrlq.js";import"./DraggableList-CJwwr4Yf.js";import"./search-DT7eSnzT.js";import"./Input-CqfuiCDH.js";import"./useControlled-CE0B1UP9.js";import"./Button-Bia0gDW5.js";import"./small-cross-uN8t5TW7.js";import"./ActionButton-C9oV7lmY.js";import"./Checkbox-B7wFdEVK.js";import"./useValueChanged-Daouhnb_.js";import"./CollapsiblePanel-BHApUmp_.js";import"./MultiColumnSortDialog-BJ890ujW.js";import"./MenuTrigger-C67nlkhF.js";import"./CompositeItem-BsouXCK9.js";import"./ToolbarRootContext-PE3H7k4f.js";import"./getDisabledMountTransitionStyles-CoQlRch0.js";import"./getPseudoElementBounds-Ifrg8lN5.js";import"./chevron-down-D6qpfBFJ.js";import"./index-DoliQ3t-.js";import"./error-BJoLJTeb.js";import"./BaseCbacBanner-iBkMCvPn.js";import"./makeExternalStore-Djn3Ds7r.js";import"./Tooltip-DVY46vFo.js";import"./PopoverPopup-D_QYRjKS.js";import"./debounce-C3gGtxAY.js";import"./useOsdkClient-PSxxWjKh.js";import"./tick-B4vi0CcG.js";import"./DropdownField-BbcYs9HM.js";import"./isEqual-BvWz3r_F.js";import"./withOsdkMetrics-DEq0VNPe.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
