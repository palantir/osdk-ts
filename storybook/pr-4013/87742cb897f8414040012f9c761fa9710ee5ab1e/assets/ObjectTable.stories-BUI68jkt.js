import{j as i}from"./iframe-B-0GKdAh.js";import{O as p}from"./object-table-4MXRKBvo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CzReaTe7.js";import"./preload-helper-BxGs137T.js";import"./Table-BGrCnd1u.js";import"./index-CeTv2GEb.js";import"./Dialog-DHj971QP.js";import"./cross-ysBsIoNl.js";import"./svgIconContainer-D680pERF.js";import"./useBaseUiId-CuPeP6_V.js";import"./InternalBackdrop-Dx-S1k2g.js";import"./composite-LajQ-4YU.js";import"./index-B28VTjrg.js";import"./index-Bvaqc28t.js";import"./index-C_O2JK4N.js";import"./useEventCallback-C4lws8eU.js";import"./SkeletonBar-BCo3EIVq.js";import"./LoadingCell-BIQAzAUj.js";import"./ColumnConfigDialog-BIKG8kyF.js";import"./DraggableList-CzmIkfU7.js";import"./search-wHoqdl81.js";import"./Input-m2Y-zZM0.js";import"./useControlled-CvXSRSaz.js";import"./Button-DglVf80r.js";import"./small-cross-D9tlZ127.js";import"./ActionButton-BL9rXH5v.js";import"./Checkbox-C5FmCcuS.js";import"./useValueChanged-CJf6xuTk.js";import"./CollapsiblePanel-uVUj59mq.js";import"./MultiColumnSortDialog-BRMpCFl2.js";import"./MenuTrigger-BM4AmwEZ.js";import"./CompositeItem-nISr-y05.js";import"./ToolbarRootContext-CwO2Drzb.js";import"./getDisabledMountTransitionStyles-D6yAx4Zz.js";import"./getPseudoElementBounds-0hkPmral.js";import"./chevron-down-CJ1qMpgz.js";import"./index-CChF4OqZ.js";import"./error-z9s112Ur.js";import"./BaseCbacBanner-DwijsOT0.js";import"./makeExternalStore-CNR6geF1.js";import"./Tooltip-DTEpkTPa.js";import"./PopoverPopup-C6laaofs.js";import"./debounce-D7txzNNR.js";import"./useOsdkClient-C5XwldCE.js";import"./tick-C2VLoN1r.js";import"./DropdownField-BT9Qh08E.js";import"./isEqual-C0dOwFPi.js";import"./withOsdkMetrics-DXKy8BiX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
