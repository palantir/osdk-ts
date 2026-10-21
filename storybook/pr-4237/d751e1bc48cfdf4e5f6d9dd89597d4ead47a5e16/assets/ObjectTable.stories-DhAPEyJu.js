import{j as i}from"./iframe-DFHLrRxy.js";import{O as p}from"./object-table-D4G82KrZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrEvod4N.js";import"./preload-helper-D3OFW4Wp.js";import"./Table-D-QUNYES.js";import"./index-lMBTNEhC.js";import"./Dialog-DXYHXN26.js";import"./cross-CvONLWGq.js";import"./svgIconContainer-CWuGvQcW.js";import"./useBaseUiId-D2rxFRGv.js";import"./InternalBackdrop-DWPCMmWX.js";import"./composite-nDV_ik1F.js";import"./index-CWojmVv7.js";import"./index-DCHHusj_.js";import"./index-DO2q5FSh.js";import"./useEventCallback-DMNzBcY_.js";import"./SkeletonBar-7Q4DLrdr.js";import"./LoadingCell-D5c1JBqa.js";import"./ColumnConfigDialog-9FkD48W3.js";import"./DraggableList-BrCUlwbj.js";import"./search-DQslwNpY.js";import"./Input-CI74CICo.js";import"./useControlled-DfjEV_zy.js";import"./Button-yx5bONTn.js";import"./small-cross-CtE4NcWg.js";import"./ActionButton-njAVZN5A.js";import"./Checkbox-DXwFG2JQ.js";import"./useValueChanged-BakNeGfp.js";import"./CollapsiblePanel-DAe7qxxF.js";import"./MultiColumnSortDialog-Do2k26Dx.js";import"./MenuTrigger-B1pp25EB.js";import"./CompositeItem-BYZr26cD.js";import"./ToolbarRootContext-BjfNF6P-.js";import"./getDisabledMountTransitionStyles-Dk_YrDen.js";import"./getPseudoElementBounds-O3DfICBX.js";import"./chevron-down-DoelWXMj.js";import"./index-DPVYsjbh.js";import"./error-C-yk3J4q.js";import"./BaseCbacBanner-BonkgzmJ.js";import"./makeExternalStore-D-LxbjRt.js";import"./Tooltip-XUDsdyce.js";import"./PopoverPopup-hcZaO1Rb.js";import"./debounce-Bd8h-BFs.js";import"./useOsdkClient-CEmmd5-D.js";import"./tick-D7elqOw7.js";import"./DropdownField-Dh5_GV1H.js";import"./isEqual-C1QUTfWi.js";import"./withOsdkMetrics-BEBmRKsA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
