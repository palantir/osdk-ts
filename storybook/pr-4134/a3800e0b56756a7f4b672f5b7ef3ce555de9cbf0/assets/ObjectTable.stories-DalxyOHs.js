import{j as i}from"./iframe-SRdlKq9b.js";import{O as p}from"./object-table-CojfwMaQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmWOAm6k.js";import"./preload-helper-s1eLnSv0.js";import"./Table-Ck3px7xM.js";import"./index-DD8FCudr.js";import"./Dialog-C_6idqLc.js";import"./cross-CXZKrh1h.js";import"./svgIconContainer-BcXM3VSp.js";import"./useBaseUiId-B4J9k2RX.js";import"./InternalBackdrop-DZ5UfCCc.js";import"./composite-CZ2o_96f.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./index-Cn9jOaaC.js";import"./useEventCallback-DlExu_x9.js";import"./SkeletonBar-2487SD1x.js";import"./LoadingCell-BO1-xQ-u.js";import"./ColumnConfigDialog-BzKmQdLo.js";import"./DraggableList-Bq9_-0P2.js";import"./search-BIvi-2TY.js";import"./Input-DAJATtsq.js";import"./useControlled-wCYPw1x7.js";import"./Button-D5IcZbYw.js";import"./small-cross-L_-ELWme.js";import"./ActionButton-C63e1YEm.js";import"./Checkbox-DtjMKN4T.js";import"./useValueChanged-BTouMuh0.js";import"./CollapsiblePanel-B-UdhI4G.js";import"./MultiColumnSortDialog-Cvq3CdhN.js";import"./MenuTrigger-BLJI1uk0.js";import"./CompositeItem-CxO1LzKy.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./getDisabledMountTransitionStyles-Bgi2j66A.js";import"./getPseudoElementBounds-CJTp5fJ0.js";import"./chevron-down--GHDODIE.js";import"./index-DhMuGg7E.js";import"./error-DFAQrfbx.js";import"./BaseCbacBanner-SCqPc3nk.js";import"./makeExternalStore-gzodh6iV.js";import"./Tooltip-CWTCUjbr.js";import"./PopoverPopup-qEnUheAt.js";import"./debounce-wqarF4Vc.js";import"./useOsdkClient-jZoOvTCC.js";import"./tick-DneUhZ2Q.js";import"./DropdownField-BkOAd7gw.js";import"./isEqual-DV_ZUJF1.js";import"./withOsdkMetrics-jgsXWTD0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
