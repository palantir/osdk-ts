import{j as i}from"./iframe-B9T5oMDr.js";import{O as p}from"./object-table-DZNFhRRA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPXefgCM.js";import"./preload-helper-BPAbrKbo.js";import"./Table-CIGinEoD.js";import"./index-BbzHpAd2.js";import"./Dialog-D85F-kac.js";import"./cross-B02AaJUG.js";import"./svgIconContainer-DzM4Ci-u.js";import"./useBaseUiId-B_QbIUqB.js";import"./InternalBackdrop-wHc4Xe94.js";import"./composite-youxeV_z.js";import"./index-BDL1OtV7.js";import"./index-mRe9n3gj.js";import"./index-Cmo-Ost7.js";import"./useEventCallback-DuSPeUKo.js";import"./SkeletonBar-Bv69qq-0.js";import"./LoadingCell-DGtbyqSk.js";import"./ColumnConfigDialog-C9t4Em6N.js";import"./DraggableList-BwPDHFS6.js";import"./search-BibTnjwg.js";import"./Input-k9vi4ZnU.js";import"./useControlled-B65L2iRV.js";import"./isEqual-DgNUFbmc.js";import"./isObject-BgKMqNpZ.js";import"./Button-jzGBL2cN.js";import"./small-cross-BtSe1Br5.js";import"./ActionButton-BQALkdcW.js";import"./Checkbox-BSPhRBEZ.js";import"./useValueChanged-DAeaTOF1.js";import"./CollapsiblePanel-CB2C8DyA.js";import"./MultiColumnSortDialog-CqSPDtnN.js";import"./MenuTrigger-Bm4TpnTD.js";import"./CompositeItem-_z9g8yfT.js";import"./ToolbarRootContext-BsgfQ9_l.js";import"./getDisabledMountTransitionStyles-CabTrKoF.js";import"./getPseudoElementBounds-CawSqWOn.js";import"./chevron-down-BEQDQVHr.js";import"./index-Bq_KCjK9.js";import"./error-Con-Q4S3.js";import"./BaseCbacBanner-BUKiEgFB.js";import"./makeExternalStore-5V9xTDRp.js";import"./Tooltip-BoO118pB.js";import"./PopoverPopup-CdrQPjRj.js";import"./toNumber-B7xpL-i_.js";import"./useOsdkClient-DNxheivJ.js";import"./tick-kXmQYu5u.js";import"./DropdownField-CSSNURoZ.js";import"./withOsdkMetrics-D1MjRaaQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
