import{j as i}from"./iframe-DwYLkjIm.js";import{O as p}from"./object-table-BRMo9PT7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BvHdSa7q.js";import"./preload-helper-ATh-df95.js";import"./Table-y0ybaHJA.js";import"./index-BjvNbQ5u.js";import"./Dialog-DKHilDA3.js";import"./cross-8A5W1-mq.js";import"./svgIconContainer-BO0D2b3B.js";import"./useBaseUiId-BLNd3-C8.js";import"./InternalBackdrop-CBy2FAi9.js";import"./composite-DkREeV9G.js";import"./index-DaP8hSau.js";import"./index-Cp5k1JkI.js";import"./index-p-dFHzM9.js";import"./useEventCallback-4trSpKTf.js";import"./SkeletonBar-aHlWFS-g.js";import"./LoadingCell-Dag5XFeY.js";import"./ColumnConfigDialog-DGLQZzbo.js";import"./DraggableList-B2wOd5-0.js";import"./search-DbuZ2eC4.js";import"./Input-COaOuFmv.js";import"./useControlled-B5ZJB9TM.js";import"./Button-De4eCp5V.js";import"./small-cross-BiHBSsw2.js";import"./ActionButton-Caxnbj33.js";import"./Checkbox-CYd1lgcd.js";import"./useValueChanged-ylpPqAwL.js";import"./CollapsiblePanel-D-S6GrQY.js";import"./MultiColumnSortDialog-CsPkz6N4.js";import"./MenuTrigger-BQNp3kuJ.js";import"./CompositeItem-CqCnARzh.js";import"./ToolbarRootContext-y1EgqHY_.js";import"./getDisabledMountTransitionStyles-1qMTk6J5.js";import"./getPseudoElementBounds-CDBWfCMY.js";import"./chevron-down-gw5VoLqI.js";import"./index-C80pQDpv.js";import"./error-CtWk7aa4.js";import"./BaseCbacBanner-DtYOs5vo.js";import"./makeExternalStore-BtQFwu78.js";import"./Tooltip-BhjeiN-x.js";import"./PopoverPopup-C4uWpPvG.js";import"./debounce-DNHX5f7v.js";import"./useOsdkClient-CvE3Z_Kn.js";import"./tick-CLGgnUMt.js";import"./DropdownField-SIQhHfOo.js";import"./isEqual-CfZs5aOK.js";import"./withOsdkMetrics-BwdGT6RG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
