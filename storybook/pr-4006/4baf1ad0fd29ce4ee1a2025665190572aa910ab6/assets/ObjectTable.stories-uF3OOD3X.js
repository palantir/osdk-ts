import{j as i}from"./iframe-CGyuUHxy.js";import{O as p}from"./object-table-CqzVwxGZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BONKzh45.js";import"./preload-helper-CHXR4TEM.js";import"./Table-D3_qtNfp.js";import"./index-BY9adCgo.js";import"./Dialog-CSowe9qH.js";import"./cross-IJIRpi8I.js";import"./svgIconContainer-BsIK3M0v.js";import"./useBaseUiId-CxRjJ2eA.js";import"./InternalBackdrop-D2QUgXtn.js";import"./composite-Ccbhb-G_.js";import"./index-BAxLRNzk.js";import"./index-CiafOJ6c.js";import"./index-BeL2DRU1.js";import"./useEventCallback-D7IhiRBC.js";import"./SkeletonBar-DpG5K-jj.js";import"./LoadingCell-KJtsg1rt.js";import"./ColumnConfigDialog-BBfs4NJo.js";import"./DraggableList-BSQTvWPg.js";import"./search-lH3pU1gQ.js";import"./Input-C3-P_z4v.js";import"./useControlled-DMowJxn0.js";import"./Button-BCdalSJc.js";import"./small-cross-C5mq1gMO.js";import"./ActionButton-1oqP8PoB.js";import"./Checkbox-C1SgmmoO.js";import"./useValueChanged-BTu-LDDs.js";import"./CollapsiblePanel-BrxTnTCc.js";import"./MultiColumnSortDialog-D9g3JzPL.js";import"./MenuTrigger-C1mo3QbN.js";import"./CompositeItem-C9KCjhut.js";import"./ToolbarRootContext-B3Ikfeie.js";import"./getDisabledMountTransitionStyles-BiBOKD-Z.js";import"./getPseudoElementBounds-Di2B7QRI.js";import"./chevron-down-DvkSXyV_.js";import"./index-GV80kSzg.js";import"./error-2nP38RK7.js";import"./BaseCbacBanner--HBtBBsc.js";import"./makeExternalStore-DIn4B4sN.js";import"./Tooltip-qASfieF8.js";import"./PopoverPopup-C8iqkpjZ.js";import"./debounce-qtcXepJn.js";import"./useOsdkClient-Dvl_qWbV.js";import"./tick-BgWIPs4c.js";import"./DropdownField-DV35Ur0Z.js";import"./isEqual-BidfQ1Lo.js";import"./withOsdkMetrics-BUGq6PJK.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
