import{j as i}from"./iframe-BzQifrbm.js";import{O as p}from"./object-table-CDq4I_Kj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DCdwrDeg.js";import"./preload-helper-CfkbdYt3.js";import"./Table-ShVLN_Dh.js";import"./index-DmrXmCsp.js";import"./Dialog-CQbyHCUs.js";import"./cross-BtXGESXa.js";import"./svgIconContainer-eTPVDcxE.js";import"./useBaseUiId-6fIHZX7k.js";import"./InternalBackdrop-DxY1hq72.js";import"./composite-Bm8VjQnK.js";import"./index-DRwqomtN.js";import"./index-C6mlQsvu.js";import"./index-qmPNzRKp.js";import"./useEventCallback-63f5yGFn.js";import"./SkeletonBar-cD86ls7w.js";import"./LoadingCell-BP04Gi6r.js";import"./ColumnConfigDialog-CP6HVMxA.js";import"./DraggableList-DjQr70Oz.js";import"./search-i0ScbyPC.js";import"./Input-D_KI0oie.js";import"./useControlled-D0PoBQGG.js";import"./Button-DGOVPU6o.js";import"./small-cross-BhH4Yfcj.js";import"./ActionButton-CgR-hyHr.js";import"./Checkbox-CVDiDgCd.js";import"./useValueChanged-DiLiLELv.js";import"./CollapsiblePanel-B1A-vb9Z.js";import"./MultiColumnSortDialog-D9Mo6dF2.js";import"./MenuTrigger-B2J7aceC.js";import"./CompositeItem-CA5vFsEl.js";import"./ToolbarRootContext-CUQpKqWY.js";import"./getDisabledMountTransitionStyles-B7tYoP6C.js";import"./getPseudoElementBounds-DWmaTZ67.js";import"./chevron-down-DgIB0DB7.js";import"./index-YkT_3P70.js";import"./error-C5OE11e3.js";import"./BaseCbacBanner-fX8smd7K.js";import"./makeExternalStore-CKMY6uVx.js";import"./Tooltip-BLUAc2Lq.js";import"./PopoverPopup-D0vD4SOK.js";import"./debounce-Sps1lGtX.js";import"./useOsdkClient-0x6uRQKq.js";import"./tick-XeSdjeFz.js";import"./DropdownField-DraiChM8.js";import"./isEqual-B5oOCPd5.js";import"./withOsdkMetrics-QrXZuSy4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
