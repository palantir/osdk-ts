import{j as i}from"./iframe-Dnd58nRU.js";import{O as p}from"./object-table-36X5EB7b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DutGQIyU.js";import"./preload-helper-Bacdch3y.js";import"./Table-odfQbrMk.js";import"./index-hYlZ2w7K.js";import"./Dialog-BNIro01J.js";import"./cross-DMNj6xwh.js";import"./svgIconContainer-BHVYL7Dt.js";import"./useBaseUiId-QDvzqdbv.js";import"./InternalBackdrop-BaUHehEq.js";import"./composite-Cv9S1-0v.js";import"./index-DlC_w9JR.js";import"./index-DuJ2F_r3.js";import"./index-DtRvjs5i.js";import"./useEventCallback-BVDE2vxg.js";import"./SkeletonBar-Drw_WsxT.js";import"./LoadingCell-DBUN3W3b.js";import"./ColumnConfigDialog-Bj6EY7Df.js";import"./DraggableList-BuXt7WoE.js";import"./search-CbjmGrOZ.js";import"./Input-C8T687yb.js";import"./useControlled-DMuhh4MF.js";import"./Button-DKxF8-HR.js";import"./small-cross-BY_zS1NT.js";import"./ActionButton-T9I7pXx-.js";import"./Checkbox-FUVkSfEp.js";import"./useValueChanged-8c_54rdl.js";import"./CollapsiblePanel-GO-pTe1W.js";import"./MultiColumnSortDialog-D_N1NvYX.js";import"./MenuTrigger-CTZ1Irxn.js";import"./CompositeItem-CHl5HG0C.js";import"./ToolbarRootContext-DfzKIhjA.js";import"./getDisabledMountTransitionStyles-Bh1xaRIU.js";import"./getPseudoElementBounds-In6m9mGL.js";import"./chevron-down-BXQTBdLk.js";import"./index-DIWs-l-i.js";import"./error-BmtsW4Hj.js";import"./BaseCbacBanner-DaEeqfC1.js";import"./makeExternalStore-CZWRqldg.js";import"./Tooltip-Cg9LbpYA.js";import"./PopoverPopup-DEFTS9RR.js";import"./debounce-Dw-OFY0_.js";import"./useOsdkClient-DeyorYS6.js";import"./tick-Cx8bHHej.js";import"./DropdownField-BGwjtvIi.js";import"./isEqual-CVAqa5cj.js";import"./withOsdkMetrics-BOeNno_q.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
