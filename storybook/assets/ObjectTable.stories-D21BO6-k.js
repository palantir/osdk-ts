import{j as i}from"./iframe-DW0pXrl1.js";import{O as p}from"./object-table-Dp9lxibM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BgAk2yyM.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-D1BnlE3x.js";import"./index-DnR9sAsk.js";import"./Dialog-Bs48vNjw.js";import"./cross-f1t5SerR.js";import"./svgIconContainer-ClnaI19G.js";import"./useBaseUiId-C-Q4_wXv.js";import"./InternalBackdrop-BluWwehb.js";import"./composite-xGDnWfXU.js";import"./index-Dqs-eX79.js";import"./index-CXBUMHcq.js";import"./index-CKqF8zbs.js";import"./useEventCallback-DL9-47i7.js";import"./SkeletonBar-BpEqfrSc.js";import"./LoadingCell-Cppq0E1m.js";import"./ColumnConfigDialog-u_l00hF8.js";import"./DraggableList-sUVbYsIz.js";import"./search-3LJjcIJ7.js";import"./Input-Bw5OahtG.js";import"./useControlled-DHwMcBbK.js";import"./Button-LBvMHfI5.js";import"./small-cross-lYSE0QnW.js";import"./ActionButton-CTtqOwIe.js";import"./Checkbox-DXCrM2qY.js";import"./useValueChanged-DrIs_yVV.js";import"./CollapsiblePanel-B1iD119e.js";import"./MultiColumnSortDialog-CsLtwpVu.js";import"./MenuTrigger-CbGb6_wD.js";import"./CompositeItem-DTleMZzr.js";import"./ToolbarRootContext-Bl9OtRZB.js";import"./getDisabledMountTransitionStyles-BtEjnFuL.js";import"./getPseudoElementBounds-Bb3qgbg4.js";import"./chevron-down-DdU7H-NS.js";import"./index-DL2Pb_FC.js";import"./error-Dy3r5qvO.js";import"./BaseCbacBanner-CVDb6F7f.js";import"./makeExternalStore-D-CdOqwo.js";import"./Tooltip-CnMi1Qb4.js";import"./PopoverPopup-DP21wBfL.js";import"./debounce-BxUvnR7-.js";import"./useOsdkClient-d2bN7B2D.js";import"./tick-BYqbPGZh.js";import"./DropdownField-Cdnzgg6h.js";import"./isEqual-Orknfn15.js";import"./withOsdkMetrics-DX22MNhQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
