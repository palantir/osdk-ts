import{j as i}from"./iframe-Cc07Bjnw.js";import{O as p}from"./object-table-bO_L6pgX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CXL_u-u7.js";import"./preload-helper-BZQmHc-4.js";import"./Table-D8Z1d91J.js";import"./index-DZvQ_Jrq.js";import"./Dialog-Ch4noVue.js";import"./cross-DA_hofl4.js";import"./svgIconContainer-CbLY47mb.js";import"./useBaseUiId-BR18Ojap.js";import"./InternalBackdrop-CkBJ-Htn.js";import"./composite-COFnfRRQ.js";import"./index-DApNf0Yd.js";import"./index-CfAZ234r.js";import"./index-EeisRTmQ.js";import"./useEventCallback-DU7S4oup.js";import"./SkeletonBar-B0XmnfEv.js";import"./LoadingCell-B03AHMLX.js";import"./ColumnConfigDialog-BNDjiFEz.js";import"./DraggableList-BeET4Qyh.js";import"./search-Qxa58yqX.js";import"./Input-Csl4g1fd.js";import"./useControlled-CVe0Wn-E.js";import"./isEqual-C0Q9kVIS.js";import"./isObject-Cz0XDPCN.js";import"./Button-DZ_IvYpL.js";import"./ActionButton-Dfx4NvI-.js";import"./Checkbox-NQv01Fdb.js";import"./useValueChanged-DN12ZBEx.js";import"./CollapsiblePanel-C5iMKM2r.js";import"./MultiColumnSortDialog-BeEbD0Qx.js";import"./MenuTrigger-B8nvmUF3.js";import"./CompositeItem-BxvAq6Sc.js";import"./ToolbarRootContext-BDV8ojGj.js";import"./getDisabledMountTransitionStyles-D66xx4r3.js";import"./getPseudoElementBounds-tq-1zKzz.js";import"./chevron-down-DB7BwQt8.js";import"./index-DC5x3408.js";import"./error-B-dp0ddC.js";import"./BaseCbacBanner-BDt8_o4X.js";import"./makeExternalStore-BOX2v8-h.js";import"./Tooltip-D4GSJRxv.js";import"./PopoverPopup-CcqtMrxa.js";import"./toNumber-CDE7M8WD.js";import"./useOsdkClient-Ba173g9u.js";import"./tick-C0GbdlQD.js";import"./DropdownField-BMbh_wYZ.js";import"./withOsdkMetrics-CiZgMogi.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
