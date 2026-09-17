import{j as i}from"./iframe-BtGRzxci.js";import{O as p}from"./object-table-DvJWCPho.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-TpiTyl28.js";import"./preload-helper-CyrDjGUQ.js";import"./Table-hzixPhpe.js";import"./index-tVIozFN1.js";import"./Dialog-UXl6_OEU.js";import"./cross-7jkwYPrY.js";import"./svgIconContainer-CN6dxZIp.js";import"./useBaseUiId-XRf534_a.js";import"./InternalBackdrop-BfGRu2JH.js";import"./composite-Btju52rS.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./index-Nbrbbk2B.js";import"./useEventCallback-BiNkxLXV.js";import"./SkeletonBar-DUe5rZ6s.js";import"./LoadingCell-C0-SnIgS.js";import"./ColumnConfigDialog-Iho4vn5M.js";import"./DraggableList-DnLFn3Lu.js";import"./search-BPr2MDER.js";import"./Input-DGQhm6BR.js";import"./useControlled-rccl1Nao.js";import"./Button-CmbUXSv3.js";import"./small-cross-CkeumqgW.js";import"./ActionButton-5xGca2at.js";import"./Checkbox-D--Pvna1.js";import"./useValueChanged-CjbtTYfl.js";import"./CollapsiblePanel-BaiGGDJy.js";import"./MultiColumnSortDialog-DYusjWQp.js";import"./MenuTrigger-IMl7rvKJ.js";import"./CompositeItem-CG89Nl1U.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./getDisabledMountTransitionStyles-CJvQQmV9.js";import"./getPseudoElementBounds-Wk9KfacK.js";import"./chevron-down-C1HWTq_e.js";import"./index-DLTZ7l6I.js";import"./error-swCJC4aW.js";import"./BaseCbacBanner-BFDB5_A0.js";import"./makeExternalStore-DP55EZzE.js";import"./Tooltip-vzjWcP7C.js";import"./PopoverPopup-Ckm-Ve__.js";import"./debounce-YXq4O7nI.js";import"./useOsdkClient-DvX2DAiH.js";import"./tick-ac30L8P3.js";import"./DropdownField-DhAab1KW.js";import"./isEqual-DiCfN5tv.js";import"./withOsdkMetrics-7PiZwI5Y.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
