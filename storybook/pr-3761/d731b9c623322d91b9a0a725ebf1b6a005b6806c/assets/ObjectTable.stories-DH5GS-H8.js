import{j as i}from"./iframe-CEXqwKDo.js";import{O as p}from"./object-table-x_chLxXQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BAbXGOBY.js";import"./preload-helper-DpdtVnp3.js";import"./Table-DgK313bN.js";import"./index-DJnSicRq.js";import"./Dialog-jxxWpWJH.js";import"./cross-I1-y4ayJ.js";import"./svgIconContainer-BLXhb9q0.js";import"./useBaseUiId-CWMGkfoD.js";import"./InternalBackdrop-DP_mDCtv.js";import"./composite-DJSIkC4h.js";import"./index-D2peK4FA.js";import"./index-DEmj-frH.js";import"./index-hvp9_h9c.js";import"./useEventCallback-DLzUPS9b.js";import"./SkeletonBar-CXJWrpg-.js";import"./LoadingCell-DsnzFvaV.js";import"./ColumnConfigDialog-xAksObsf.js";import"./DraggableList-DR9qtSRV.js";import"./search-DS8naRzK.js";import"./Input-C1mfdO-x.js";import"./useControlled-21P8hLcZ.js";import"./isEqual-B4DsWaQb.js";import"./isObject-DVDQHZSO.js";import"./Button-MZyF5CTL.js";import"./ActionButton-BxjwSRoH.js";import"./Checkbox-Cju0vHy8.js";import"./useValueChanged-ChWeTpFp.js";import"./CollapsiblePanel-CfwG2N-H.js";import"./MultiColumnSortDialog-DulxSL_i.js";import"./MenuTrigger-qPfJmrQn.js";import"./CompositeItem-M1EwA00W.js";import"./ToolbarRootContext-BT8GwrHL.js";import"./getDisabledMountTransitionStyles-CmRzzEKC.js";import"./getPseudoElementBounds-CnRAPfrn.js";import"./chevron-down-DGS9RK0n.js";import"./index-BlHia6Sj.js";import"./error-3ZtiZkhO.js";import"./BaseCbacBanner-pBmoNwBo.js";import"./makeExternalStore-DrF82NRc.js";import"./Tooltip-P7-drKpN.js";import"./PopoverPopup-jaIOrC4o.js";import"./toNumber-Bw9trI7C.js";import"./useOsdkClient-2LcbhRGb.js";import"./tick-CUCnjPHY.js";import"./DropdownField-88QghriF.js";import"./withOsdkMetrics--K3s2hUl.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
