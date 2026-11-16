import{j as i}from"./iframe-DGSVH7ih.js";import{O as p}from"./object-table-C4VpbQcw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BtzyeO4G.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-b1v88Pr-.js";import"./index-CWCW2TNI.js";import"./Dialog-C-Shdnwc.js";import"./cross-CvX0N4CS.js";import"./svgIconContainer-Cr42efgU.js";import"./useBaseUiId-CUzGGztv.js";import"./InternalBackdrop-BiQg34oG.js";import"./composite-CZStrJl6.js";import"./index-DcV7YM_0.js";import"./index-BQRwVVvU.js";import"./index-DLMh8z7x.js";import"./useEventCallback-CR9RHm-1.js";import"./SkeletonBar-Ccy0H5G7.js";import"./LoadingCell-B_-iiokl.js";import"./ColumnConfigDialog-D9yJG8h0.js";import"./DraggableList-dRFSQN3R.js";import"./search-Ms57RDK0.js";import"./Input-BMGPA6kQ.js";import"./useControlled-DIh7B-EX.js";import"./Button-hUhDz_nK.js";import"./small-cross-CgrlmkQc.js";import"./ActionButton-gW-JXC-3.js";import"./Checkbox-DHxcmdc7.js";import"./useValueChanged-B06XAO6O.js";import"./CollapsiblePanel-BNVEM1jZ.js";import"./MultiColumnSortDialog-9T7ss7CS.js";import"./MenuTrigger-z0zhSk9n.js";import"./CompositeItem-ChK2cRHi.js";import"./ToolbarRootContext-Dx_n0qqS.js";import"./getDisabledMountTransitionStyles-DNsTJsOD.js";import"./getPseudoElementBounds-v1o8MRIa.js";import"./chevron-down-Wv7CQLfg.js";import"./index-JXPpIgsw.js";import"./error-B-lFLFVh.js";import"./BaseCbacBanner-BNO6Noip.js";import"./makeExternalStore-DBH296jI.js";import"./Tooltip-BfWuJBag.js";import"./PopoverPopup-CUzAnlgp.js";import"./Select-B9JAKdg8.js";import"./useOsdkClient-BZZNJHHe.js";import"./tick-CTH5_AKz.js";import"./DropdownField-BWt4U9sB.js";import"./useDebouncedCallback-6dMPohFl.js";import"./isEqual-3BX1wwaO.js";import"./_baseIsEqual-CZt1h0DB.js";import"./stableSerialize-hL56Cbf8.js";import"./withOsdkMetrics-69zOARzS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,Te={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const fe=["Default"];export{n as Default,fe as __namedExportsOrder,Te as default};
