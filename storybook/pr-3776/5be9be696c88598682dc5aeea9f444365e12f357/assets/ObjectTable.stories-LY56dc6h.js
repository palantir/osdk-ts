import{j as i}from"./iframe-BcrluB4l.js";import{O as p}from"./object-table-tTESQlTz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPDrWOv8.js";import"./preload-helper-CMptGl2f.js";import"./Table-CQ8twf8w.js";import"./index-BPHTN-Ic.js";import"./Dialog-CcGvCVRC.js";import"./cross-CbMBUGlC.js";import"./svgIconContainer-BPAup90b.js";import"./useBaseUiId-COen3SNx.js";import"./InternalBackdrop-DZmHnGde.js";import"./composite-BL4i_Dd_.js";import"./index-DB61AMZ9.js";import"./index-DyKMSrbe.js";import"./index-BMgCDSVG.js";import"./useEventCallback-C6fFqXyE.js";import"./SkeletonBar-C-Z5HyPu.js";import"./LoadingCell-BBP0iUNs.js";import"./ColumnConfigDialog-C2xrEK7a.js";import"./DraggableList-BQmBFo1I.js";import"./search-UY8sNtzX.js";import"./Input-BWZEIjN7.js";import"./useControlled-s5y_Kd6s.js";import"./isEqual-Ci9lQ3Gg.js";import"./isObject-CbCEqu8w.js";import"./Button-BOymE2P8.js";import"./ActionButton-BhEHpIgB.js";import"./Checkbox-BKgiMTYz.js";import"./useValueChanged-8Sy0KQDz.js";import"./CollapsiblePanel-CkSIzJJh.js";import"./MultiColumnSortDialog-D-Vn9-xU.js";import"./MenuTrigger-DXXXsFlp.js";import"./CompositeItem-BXCgv3jv.js";import"./ToolbarRootContext-D34lClUE.js";import"./getDisabledMountTransitionStyles-QP1QK2bF.js";import"./getPseudoElementBounds-46Ka_uq5.js";import"./chevron-down-DL5tAbBo.js";import"./index-B-I3Uh8K.js";import"./error-CycMySYi.js";import"./BaseCbacBanner-DHYvpBBq.js";import"./makeExternalStore-CLPl01nQ.js";import"./Tooltip-C5dKWTck.js";import"./PopoverPopup-D4SHdc0w.js";import"./toNumber-D4SbUGjd.js";import"./useOsdkClient-DxC0-1je.js";import"./tick-BexnmMAh.js";import"./DropdownField-9vwLO1SK.js";import"./withOsdkMetrics-WV7mv1fL.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
