import{j as i}from"./iframe-Ccq8LnzR.js";import{O as p}from"./object-table-BwNQP79J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BT32GJoT.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BNfCu1B_.js";import"./index-ibpVN2lt.js";import"./Dialog-Dd9tli1K.js";import"./cross-D61Z2HA7.js";import"./svgIconContainer-B3MTQTZk.js";import"./useBaseUiId-ChrZBL00.js";import"./InternalBackdrop-C6KEc4k3.js";import"./composite-CUDUHPUL.js";import"./index-CsxRvKms.js";import"./index-DSa7XzaC.js";import"./index-BjFrub02.js";import"./useEventCallback-BTtlCNNb.js";import"./SkeletonBar-D--J-NXf.js";import"./LoadingCell-B1A6ARPD.js";import"./ColumnConfigDialog-D7TjP6l5.js";import"./DraggableList-DqIyDI4r.js";import"./search-fYPHsLc6.js";import"./Input-CDUlKefO.js";import"./useControlled-BDMchsxG.js";import"./Button-ZG1qj9kz.js";import"./small-cross-X50wsIgk.js";import"./ActionButton-BCy4f3fN.js";import"./Checkbox-wr4CrvWc.js";import"./useValueChanged-DAinPMBg.js";import"./CollapsiblePanel-CZQxSMBU.js";import"./MultiColumnSortDialog-BGMzVDz6.js";import"./MenuTrigger-gpcrY7AQ.js";import"./CompositeItem-oGACzHps.js";import"./ToolbarRootContext-C39odqBG.js";import"./getDisabledMountTransitionStyles-DQQWGbDa.js";import"./getPseudoElementBounds-ThTpZrh5.js";import"./chevron-down-CcArFodd.js";import"./index-CoeZrPs6.js";import"./error-DHq6tj_T.js";import"./BaseCbacBanner-BwNweq9C.js";import"./makeExternalStore-_f2hnKfG.js";import"./Tooltip-CxZiJ6KQ.js";import"./PopoverPopup-o-m8jew_.js";import"./debounce-DECuEKDc.js";import"./useOsdkClient-DOH5uFok.js";import"./tick-CdTACpR9.js";import"./DropdownField-DGqy8Ho_.js";import"./isEqual-Bo4M0cTA.js";import"./withOsdkMetrics-B2PLhQzs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
