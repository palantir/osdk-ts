import{j as i}from"./iframe-uyk0mCUp.js";import{O as p}from"./object-table-BTyYwJG6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CaSl9mcs.js";import"./preload-helper-DUkoerkJ.js";import"./Table-DrTTbu2q.js";import"./index-cNyJXSMp.js";import"./Dialog-DZUm8P7v.js";import"./cross-CFwh4iO6.js";import"./svgIconContainer-B7m6z2vX.js";import"./useBaseUiId-BRAYv9TN.js";import"./InternalBackdrop-BMCnvbv2.js";import"./composite-D9L4RBPJ.js";import"./index-COpefVFT.js";import"./index-ClQrFhrN.js";import"./index-5_B92b-6.js";import"./useEventCallback-DbLpAI-e.js";import"./SkeletonBar-BAagPvkY.js";import"./LoadingCell-BBRk3sl4.js";import"./ColumnConfigDialog-BY47kZd1.js";import"./DraggableList-D3hB1ejD.js";import"./search-C-V8Xqsq.js";import"./Input-OnWCQOx0.js";import"./useControlled-BFcXAkHj.js";import"./isEqual-BHPC-lv4.js";import"./isObject-DBijMYtE.js";import"./Button-COieJLVA.js";import"./ActionButton-Cb7KVMxo.js";import"./Checkbox-nUU4UOCK.js";import"./useValueChanged-DXmh0cT4.js";import"./CollapsiblePanel-C8NvxIBZ.js";import"./MultiColumnSortDialog-Bd1Ffmvt.js";import"./MenuTrigger-c9FhZmLK.js";import"./CompositeItem-pCeGSAYO.js";import"./ToolbarRootContext-DI0UYGrF.js";import"./getDisabledMountTransitionStyles-Dansh3cO.js";import"./getPseudoElementBounds-BhVF9B8d.js";import"./chevron-down-C3FX5T-R.js";import"./index-BY1UeHqx.js";import"./error-Dwadp2yn.js";import"./BaseCbacBanner-B5u1VnT7.js";import"./makeExternalStore-gyq_4DLC.js";import"./Tooltip-CDYEbWwI.js";import"./PopoverPopup-DGuzh4yZ.js";import"./toNumber-D5_GPrTk.js";import"./useOsdkClient-Cn6Hv8Xo.js";import"./tick-DEmqx1VC.js";import"./DropdownField-jQDwsq8u.js";import"./withOsdkMetrics-D2afrcgu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
