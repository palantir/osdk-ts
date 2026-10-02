import{j as i}from"./iframe-826Gs96o.js";import{O as p}from"./object-table-Thljzijj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CeYZbSSZ.js";import"./preload-helper-Dy1PefeT.js";import"./Table-DCXP7kJp.js";import"./index-DxFbtAl2.js";import"./Dialog-BlwK3Qsn.js";import"./cross-CGVnPFvE.js";import"./svgIconContainer-C9llsudM.js";import"./useBaseUiId-Dg5t7t_V.js";import"./InternalBackdrop-xUOOm_9M.js";import"./composite-CfFzeQqA.js";import"./index-CjQrbWNq.js";import"./index-DuT9KNdT.js";import"./index-Bs21FMkz.js";import"./useEventCallback-BJHP1M_f.js";import"./SkeletonBar-B0AWztU4.js";import"./LoadingCell-B_nwXWP8.js";import"./ColumnConfigDialog-B9ixCZfi.js";import"./DraggableList-s-AQ20Te.js";import"./search-BZHAnhvn.js";import"./Input-DI6TXQQJ.js";import"./useControlled-BpCUWNpJ.js";import"./Button-DNoJUNAB.js";import"./small-cross-C8UmW7Hs.js";import"./ActionButton-DDJP6dlY.js";import"./Checkbox-I9jrKPP8.js";import"./useValueChanged-DENmBLV7.js";import"./CollapsiblePanel-DuQd7Yzu.js";import"./MultiColumnSortDialog-D0tYMKqS.js";import"./MenuTrigger-gSFbsB9W.js";import"./CompositeItem-CcW3IcXa.js";import"./ToolbarRootContext-CHa8QnRi.js";import"./getDisabledMountTransitionStyles-DGBLiCd8.js";import"./getPseudoElementBounds-K8yHl1as.js";import"./chevron-down-DTD0XUuq.js";import"./index-BpqO_0Z6.js";import"./error-BRJ8RgcR.js";import"./BaseCbacBanner-BD75tGsg.js";import"./makeExternalStore-vPmU5su8.js";import"./Tooltip-1a4YvbvY.js";import"./PopoverPopup-CAuY5cHw.js";import"./debounce-R32f75fq.js";import"./useOsdkClient-CAEYuMrw.js";import"./tick-Cz6w76NV.js";import"./DropdownField-D4QNZQ_M.js";import"./isEqual-nMBzRr3Z.js";import"./withOsdkMetrics-BKsd8iS7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
