import{j as i}from"./iframe-DfEkohu4.js";import{O as p}from"./object-table-BN1-u8MV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DgiUgE0s.js";import"./preload-helper-DFhwYWPX.js";import"./Table-D2cJLHUH.js";import"./index-BScMX4pI.js";import"./Dialog-DcZzoWRJ.js";import"./cross-BPfWpbhR.js";import"./svgIconContainer-52IA31OT.js";import"./useBaseUiId-B77SsLeT.js";import"./InternalBackdrop-DXqBVLJs.js";import"./composite-Bps_FR72.js";import"./index-JsvBI6N5.js";import"./index-DeVDv3z2.js";import"./index-hIEvmrlT.js";import"./useEventCallback-DfD6b3pP.js";import"./SkeletonBar-DVdvzFwN.js";import"./LoadingCell-C83u4qPQ.js";import"./ColumnConfigDialog-BnmliCoh.js";import"./DraggableList-89VWJX01.js";import"./search-B6VKD1Dj.js";import"./Input-BPcgfpFu.js";import"./useControlled-BtbuRmOW.js";import"./Button-hRgK4Dbu.js";import"./small-cross-DDNeE2US.js";import"./ActionButton-BGdEaaKW.js";import"./Checkbox-DBVre3dS.js";import"./useValueChanged-DA_n1_wF.js";import"./CollapsiblePanel-Cfd-QJkm.js";import"./MultiColumnSortDialog-ezrWLSmU.js";import"./MenuTrigger-6H-bl2y6.js";import"./CompositeItem-Efavp-9X.js";import"./ToolbarRootContext-CElxzA4r.js";import"./getDisabledMountTransitionStyles-BYqMdHQa.js";import"./getPseudoElementBounds-ibDNbMG2.js";import"./chevron-down-BPKdn-wb.js";import"./index-CFbhSp4o.js";import"./error-CvHPy682.js";import"./BaseCbacBanner-LKGdtPKp.js";import"./makeExternalStore-D77TIE_F.js";import"./Tooltip-CU1xiDOq.js";import"./PopoverPopup-uQDnUDEP.js";import"./debounce-CtoYG2yf.js";import"./useOsdkClient-CcG1MUqc.js";import"./tick-CjKE3w4f.js";import"./DropdownField-BqAebNxN.js";import"./isEqual-DyTTXjjH.js";import"./withOsdkMetrics-CSBiz8Z-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
