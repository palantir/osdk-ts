import{j as i}from"./iframe-zZuIx-c9.js";import{O as p}from"./object-table-DW_Vj8dz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BeF9kDPS.js";import"./preload-helper-XLtQClQl.js";import"./Table-DIOfekiY.js";import"./index-DGgNHuzV.js";import"./Dialog-CT-MsiOQ.js";import"./cross-CI4w4_Jo.js";import"./svgIconContainer-BVFcWySo.js";import"./useBaseUiId-QsYmwdFZ.js";import"./InternalBackdrop-B0ZUvn2o.js";import"./composite-Cx527Tyd.js";import"./index-TM8zQZc6.js";import"./index-C1Pc_aQZ.js";import"./index-DSSfDUcI.js";import"./useEventCallback-DuyscJu3.js";import"./SkeletonBar-BpofndJ7.js";import"./LoadingCell-BBJkPVdt.js";import"./ColumnConfigDialog-BPIPUBx0.js";import"./DraggableList-D51EtEm_.js";import"./search-CNuN0o2o.js";import"./Input-BD19hUvi.js";import"./useControlled-B4CVwr3J.js";import"./Button-Cv2L8neg.js";import"./small-cross-Ce2qYYjw.js";import"./ActionButton-CTnMDA00.js";import"./Checkbox-OBFd4f6B.js";import"./useValueChanged-VVjI8tpd.js";import"./CollapsiblePanel-CDMZ6agG.js";import"./MultiColumnSortDialog-cmzLi8G7.js";import"./MenuTrigger-ynLmujTD.js";import"./CompositeItem-DKDVMcoh.js";import"./ToolbarRootContext-pNEiopTT.js";import"./getDisabledMountTransitionStyles-B0Omgaf7.js";import"./getPseudoElementBounds-Dw3d2TY6.js";import"./chevron-down-BRlfcJdA.js";import"./index-DaqIxsao.js";import"./error-C5gHLQAi.js";import"./BaseCbacBanner-_cQym-JM.js";import"./makeExternalStore-BcA2BzRz.js";import"./Tooltip-C-LiyBN2.js";import"./PopoverPopup-CVvRvgY6.js";import"./debounce-BGzgo4FS.js";import"./useOsdkClient-BmjkDG1y.js";import"./tick-mF_xRJKy.js";import"./DropdownField-DCyylpdR.js";import"./isEqual-CNzTfT1J.js";import"./withOsdkMetrics-Y5EbkS67.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
