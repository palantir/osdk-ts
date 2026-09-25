import{j as i}from"./iframe-CdF0Fq9c.js";import{O as p}from"./object-table-DCTB_jFv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D92iwbjK.js";import"./preload-helper-Ct1oZRJx.js";import"./Table-47tQQ2gN.js";import"./index-C157L91v.js";import"./Dialog-C2Um4hjO.js";import"./cross-DSYmSTiz.js";import"./svgIconContainer-B4dKEY9f.js";import"./useBaseUiId-ONWuAW-H.js";import"./InternalBackdrop-BmiLCT5S.js";import"./composite-CLj3gTzn.js";import"./index-1mFMxabl.js";import"./index-C1-F-JKF.js";import"./index-DoBn_sDd.js";import"./useEventCallback-CdebAKnn.js";import"./SkeletonBar-Txh1lAT2.js";import"./LoadingCell-DVLyiZTo.js";import"./ColumnConfigDialog-DV3GZ88c.js";import"./DraggableList-Cslini3j.js";import"./search-DhvEixTQ.js";import"./Input-DtrPcu15.js";import"./useControlled-B9w800yx.js";import"./Button-BBUQ2vzx.js";import"./small-cross-Bkhxrwyf.js";import"./ActionButton-B0D-C4ck.js";import"./Checkbox-9tfyC6al.js";import"./useValueChanged-Ddn72qJ7.js";import"./CollapsiblePanel-CkXKbl9a.js";import"./MultiColumnSortDialog-BMJy-M2V.js";import"./MenuTrigger-CzIoZhik.js";import"./CompositeItem-D7LuxCQJ.js";import"./ToolbarRootContext-B-5g_cXd.js";import"./getDisabledMountTransitionStyles-TKnsNZOB.js";import"./getPseudoElementBounds-DjlHjzw2.js";import"./chevron-down-duFxKh1l.js";import"./index-DcWJRYHo.js";import"./error-1hy_7Gr5.js";import"./BaseCbacBanner-BoHDJ-9K.js";import"./makeExternalStore-DXEmCGwz.js";import"./Tooltip-IWrVwCEs.js";import"./PopoverPopup-D5M-MmVN.js";import"./debounce-DPATjUqM.js";import"./useOsdkClient-B8BKhdw9.js";import"./tick-BqfEES5I.js";import"./DropdownField-DHwNGiCR.js";import"./isEqual-kk6H38Ns.js";import"./withOsdkMetrics-6s0IiMkQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
