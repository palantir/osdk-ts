import{j as i}from"./iframe-sCC61k92.js";import{O as p}from"./object-table-Mdjlx4Ke.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-wIechBvj.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DcSmCGEJ.js";import"./index-COwL7OJ8.js";import"./Dialog-MQVy5lzB.js";import"./cross-DRK3VtDX.js";import"./svgIconContainer-hqfoTYTd.js";import"./useBaseUiId-BliaD1O6.js";import"./InternalBackdrop-B3dfpWNK.js";import"./composite-CISHKC9x.js";import"./index-BO4p12nE.js";import"./index-BPgVurxA.js";import"./index-BPupFXYK.js";import"./useEventCallback-Ce-cRsvG.js";import"./SkeletonBar-CwQdqdMR.js";import"./LoadingCell-tO7EVVGR.js";import"./ColumnConfigDialog-D0_f0eWX.js";import"./DraggableList-C7RmjcDp.js";import"./search-BCt11QUz.js";import"./Input-oPnlo5ZK.js";import"./useControlled-QNZ0QZkj.js";import"./Button-CuqFP7rB.js";import"./small-cross-DuGAeEln.js";import"./ActionButton-KMvLy2U-.js";import"./Checkbox-CZTc9Hct.js";import"./useValueChanged-ClT-kz_1.js";import"./CollapsiblePanel-nEea4UtK.js";import"./MultiColumnSortDialog-WfN_XSl-.js";import"./MenuTrigger-DwEmv81m.js";import"./CompositeItem-DoarEqny.js";import"./ToolbarRootContext-C2ojXHeq.js";import"./getDisabledMountTransitionStyles-a-o7jZ9k.js";import"./getPseudoElementBounds-DMHhNAb7.js";import"./chevron-down-5SB1wRqG.js";import"./index-B-SSDTy4.js";import"./error-DG5J3I3H.js";import"./BaseCbacBanner-CFeBxzk8.js";import"./makeExternalStore-BHhNjBOZ.js";import"./Tooltip-tKWANxvR.js";import"./PopoverPopup-DWR0jCHo.js";import"./debounce-DfOnU9UJ.js";import"./useOsdkClient-C8WGuLkk.js";import"./tick-DkGxN_Ch.js";import"./DropdownField-BAeW6QRw.js";import"./isEqual-DfRx8L9e.js";import"./withOsdkMetrics-B8lVQvrV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
