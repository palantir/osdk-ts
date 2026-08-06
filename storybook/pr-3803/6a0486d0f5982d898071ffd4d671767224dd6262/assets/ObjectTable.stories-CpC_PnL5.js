import{j as i}from"./iframe-DD9cnFys.js";import{O as p}from"./object-table-mpTeAogY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C-ue-nBo.js";import"./preload-helper-Bu1CQnKL.js";import"./Table-CQS6vAnL.js";import"./index-CnfMn84N.js";import"./Dialog-fUoppMVO.js";import"./cross-_7zlGwns.js";import"./svgIconContainer-BxaZ4skB.js";import"./useBaseUiId-BPJNe1N9.js";import"./InternalBackdrop-DgRQ5o-f.js";import"./composite-CS4z5jOQ.js";import"./index-D-Nkh_eJ.js";import"./index-BSqqb3Ab.js";import"./index-BUerwKFA.js";import"./useEventCallback-BOQfEoG8.js";import"./SkeletonBar-BqO0vMc3.js";import"./LoadingCell-BczuEITl.js";import"./ColumnConfigDialog-BwUJ4deF.js";import"./DraggableList-FsW_oLKu.js";import"./search-Bw9u37nA.js";import"./Input-BTKsKM7k.js";import"./useControlled-AJxb8xEE.js";import"./isEqual-BLxEsJG0.js";import"./isObject-DnbozKkM.js";import"./Button-CIpm3hgo.js";import"./ActionButton-BDjixNRg.js";import"./Checkbox-CW6ztjwn.js";import"./useValueChanged-DXJ6y04V.js";import"./CollapsiblePanel-BkBbrP4e.js";import"./MultiColumnSortDialog-wOGWC21o.js";import"./MenuTrigger-EbVC4t-5.js";import"./CompositeItem-D6ac5Q0X.js";import"./ToolbarRootContext-B4yKvb37.js";import"./getDisabledMountTransitionStyles-cJFM1D32.js";import"./getPseudoElementBounds-C9xA_Cf8.js";import"./chevron-down-BN0W8txx.js";import"./index-CUTzcWww.js";import"./error-CbN-SPes.js";import"./BaseCbacBanner-2XMhE7Bw.js";import"./makeExternalStore-DYPfwRWT.js";import"./Tooltip-FQaQAfIM.js";import"./PopoverPopup-DZ8_WYYu.js";import"./toNumber-FRAg_Pyy.js";import"./useOsdkClient-dFa0cTgA.js";import"./tick-IPZkOIFl.js";import"./DropdownField-txWP4R8G.js";import"./withOsdkMetrics-BVsGKhhQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
