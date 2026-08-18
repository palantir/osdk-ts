import{j as i}from"./iframe-CxgKmfts.js";import{O as p}from"./object-table-Csj-Cg66.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DjFTRKda.js";import"./preload-helper-B1ZVO4RI.js";import"./Table-CeOVRBPw.js";import"./index-CWB08-R4.js";import"./Dialog-CbA86Ogi.js";import"./cross-Cgtr1c1V.js";import"./svgIconContainer-I9PvnlO_.js";import"./useBaseUiId-D_ExVr6r.js";import"./InternalBackdrop-KjPkGRsq.js";import"./composite-CxoyATG1.js";import"./index-DV2VvHyn.js";import"./index-BDjSCwox.js";import"./index-C8YewBG3.js";import"./useEventCallback-cWdavpVJ.js";import"./SkeletonBar-7NqNTH8P.js";import"./LoadingCell-C9Vu4J8E.js";import"./ColumnConfigDialog-Bi94eNQD.js";import"./DraggableList-Bluwkle1.js";import"./search-Dxx8Wlti.js";import"./Input-BORueW5n.js";import"./useControlled-_CoSROd4.js";import"./Button-DtbGY7fi.js";import"./small-cross-CgkI7U0n.js";import"./ActionButton-BFTDCvgc.js";import"./Checkbox-CmVXv-8i.js";import"./useValueChanged-BvZnG3_E.js";import"./CollapsiblePanel-CVIBkRBX.js";import"./MultiColumnSortDialog-BvLjjGee.js";import"./MenuTrigger-BPgNYlzf.js";import"./CompositeItem-CMYBs2xS.js";import"./ToolbarRootContext-BpJLr83A.js";import"./getDisabledMountTransitionStyles-REb6g5g0.js";import"./getPseudoElementBounds-BPR2lIeY.js";import"./chevron-down-BxImBJhJ.js";import"./index-pKyJ291Y.js";import"./error-BlkeWzi2.js";import"./BaseCbacBanner-CjiGFirJ.js";import"./makeExternalStore-Dg2idi7m.js";import"./Tooltip-DM9JyoYs.js";import"./PopoverPopup-Ct-EccSB.js";import"./debounce-ldRXCGpP.js";import"./useOsdkClient-_veAyDMq.js";import"./tick-CYpHjQHt.js";import"./DropdownField-Dg83r_8y.js";import"./isEqual-rrKOSo6E.js";import"./withOsdkMetrics-PSzjLOa4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
