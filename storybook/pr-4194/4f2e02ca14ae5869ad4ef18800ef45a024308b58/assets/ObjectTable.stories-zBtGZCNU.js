import{j as i}from"./iframe-CRfkLV31.js";import{O as p}from"./object-table-Dq0vyH8t.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCpalUUs.js";import"./preload-helper-YWkr71E4.js";import"./Table-C7gaOaO6.js";import"./index-DFmae8Ml.js";import"./Dialog-BE9C1eNO.js";import"./cross-2MhXpbG_.js";import"./svgIconContainer-Cv_5fobV.js";import"./useBaseUiId-CtBQzgSV.js";import"./InternalBackdrop-Hd16GtHK.js";import"./composite-Caz7Fjnj.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./index-D4xobDeS.js";import"./useEventCallback-BWqA8sXr.js";import"./SkeletonBar-h9eX593x.js";import"./LoadingCell-B9H0SnSs.js";import"./ColumnConfigDialog-DBWSmJ3l.js";import"./DraggableList-CjVbtBqm.js";import"./search-DgbssBMa.js";import"./Input-C9MxuagH.js";import"./useControlled-B56Cy6tA.js";import"./Button-COPRfQ9y.js";import"./small-cross-Bp20qFfY.js";import"./ActionButton-DCGdEOGa.js";import"./Checkbox-DM9Tz5iE.js";import"./useValueChanged-ojMWA7Lu.js";import"./CollapsiblePanel-BpxJ4S1Z.js";import"./MultiColumnSortDialog-BXhBUuFE.js";import"./MenuTrigger-DFdYgIUQ.js";import"./CompositeItem-BIX1YXND.js";import"./ToolbarRootContext-DesSIIiD.js";import"./getDisabledMountTransitionStyles-DL_MWW6U.js";import"./getPseudoElementBounds-CXdwiOru.js";import"./chevron-down-CQ908lz2.js";import"./index-BTr8Rb7H.js";import"./error-Bjl4tfNj.js";import"./BaseCbacBanner-wzZeSJV7.js";import"./makeExternalStore-DD66B2VR.js";import"./Tooltip-C3E-sj79.js";import"./PopoverPopup-qLtR5Yx9.js";import"./debounce-D-aRhyl3.js";import"./useOsdkClient-BNC8fnuO.js";import"./tick-DaS6FevP.js";import"./DropdownField-IPwkGfmB.js";import"./isEqual-BQ5yqGMv.js";import"./withOsdkMetrics-BXaEjRyq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
