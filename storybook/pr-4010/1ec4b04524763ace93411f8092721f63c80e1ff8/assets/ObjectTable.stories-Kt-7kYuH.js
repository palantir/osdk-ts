import{j as i}from"./iframe-g7EXj__l.js";import{O as p}from"./object-table-DTbvjMdY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DbiBnn2k.js";import"./preload-helper-D8k1PL_q.js";import"./Table-DJjZEmrh.js";import"./index-STGRTw-I.js";import"./Dialog-XCUIdX4K.js";import"./cross-DMuPKEQ0.js";import"./svgIconContainer-DFRoFWsy.js";import"./useBaseUiId-JhwK1l7S.js";import"./InternalBackdrop-DAPPStaY.js";import"./composite-CTFcElLo.js";import"./index-B0EzKUi-.js";import"./index-C-z8TFzf.js";import"./index-B1IG8Yi1.js";import"./useEventCallback-DRPgLmUn.js";import"./SkeletonBar-D6lZdVq4.js";import"./LoadingCell-CeKAI7DY.js";import"./ColumnConfigDialog-Dqvj4yM_.js";import"./DraggableList-Cv3KZNur.js";import"./search-Dyr6dgW-.js";import"./Input-B51qbm94.js";import"./useControlled-Bl9w2UKC.js";import"./Button-bn5eeaYG.js";import"./small-cross-Cmov1ycc.js";import"./ActionButton-K4ZhL1v-.js";import"./Checkbox-VC0kvEDQ.js";import"./useValueChanged-D8GvB5cP.js";import"./CollapsiblePanel-QedkUBfr.js";import"./MultiColumnSortDialog-Dc4W12HY.js";import"./MenuTrigger-CCgakD4e.js";import"./CompositeItem-C0TLzRF2.js";import"./ToolbarRootContext-BDh1zVyN.js";import"./getDisabledMountTransitionStyles-C2M1pWlv.js";import"./getPseudoElementBounds-CQh8woL5.js";import"./chevron-down-DYMGKjqf.js";import"./index-CuPaLakH.js";import"./error-CiSXC6k7.js";import"./BaseCbacBanner-CnM_N6Ua.js";import"./makeExternalStore-B5gQKQXN.js";import"./Tooltip-CuGUkUwF.js";import"./PopoverPopup-kmYtvjiL.js";import"./debounce-BTft0WlZ.js";import"./useOsdkClient-DDtgbU-m.js";import"./tick-Dss7UdqX.js";import"./DropdownField-vSeRPihM.js";import"./isEqual-B6NaPJsE.js";import"./withOsdkMetrics-DC-0ZtoG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
