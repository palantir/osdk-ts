import{j as i}from"./iframe-DGHdiPVF.js";import{O as p}from"./object-table-B2GoNv8W.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BHcOKkKa.js";import"./preload-helper-Dwawx57G.js";import"./Table-OpGxcVjY.js";import"./index-CfDWuSgz.js";import"./Dialog-D_DzuMTT.js";import"./cross-B2_lH3br.js";import"./svgIconContainer-Cn2xvZW5.js";import"./useBaseUiId-DSFsxKY7.js";import"./InternalBackdrop-Ca1YtWjW.js";import"./composite-D0rWnQN7.js";import"./index-D6q9eE8T.js";import"./index-CvnU9MrA.js";import"./index-CD180WQx.js";import"./useEventCallback-CB_1zqCu.js";import"./SkeletonBar-C3HyLBXM.js";import"./LoadingCell-Dot3nYwb.js";import"./ColumnConfigDialog-CPsL-yv9.js";import"./DraggableList-CC4bozEW.js";import"./search-B7igo8wt.js";import"./Input-CON8UdB3.js";import"./useControlled-BEh8mP6Z.js";import"./Button-BowS6vUa.js";import"./small-cross-DQbMxM7N.js";import"./ActionButton-BMxdUIOw.js";import"./Checkbox-CqUOqq9Q.js";import"./useValueChanged-C5WGo09l.js";import"./CollapsiblePanel-CamAlsBH.js";import"./MultiColumnSortDialog-BQgUBeFy.js";import"./MenuTrigger-BNU8Gdvw.js";import"./CompositeItem-Bbw7hYJK.js";import"./ToolbarRootContext-SNm3mtrK.js";import"./getDisabledMountTransitionStyles-Cg-wyC-n.js";import"./getPseudoElementBounds-C4GLDEW1.js";import"./chevron-down-DP9lMKr_.js";import"./index-DrXgwkrt.js";import"./error-BdbrlX1x.js";import"./BaseCbacBanner-D9RvOaHG.js";import"./makeExternalStore-CWOokT-C.js";import"./Tooltip-D3MjycZw.js";import"./PopoverPopup-C2CAOZi1.js";import"./debounce-BS1ne0cG.js";import"./useOsdkClient-jX8T137v.js";import"./tick-BziusfMA.js";import"./DropdownField-CvEOum2T.js";import"./isEqual-DLlN249z.js";import"./withOsdkMetrics-DkGiRBlo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
