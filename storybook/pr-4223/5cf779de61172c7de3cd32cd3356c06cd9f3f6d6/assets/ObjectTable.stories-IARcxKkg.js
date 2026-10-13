import{j as i}from"./iframe-oUWpW2hj.js";import{O as p}from"./object-table-CLbmZn-l.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BJ9wB1Fl.js";import"./preload-helper-Yv6afaVL.js";import"./Table-CiWH93CS.js";import"./index-CgvqzYiy.js";import"./Dialog-v0v8UvAL.js";import"./cross-DH6uOwyM.js";import"./svgIconContainer-CfDlmTSN.js";import"./useBaseUiId-CNXzk4iF.js";import"./InternalBackdrop-DCSUOs2p.js";import"./composite-DXJqaJaP.js";import"./index-BbYayOBF.js";import"./index-Cg1Ec0a0.js";import"./index-DK-jKqOF.js";import"./useEventCallback-DZOwbbJq.js";import"./SkeletonBar-ClsJkh65.js";import"./LoadingCell-DIzFAauO.js";import"./ColumnConfigDialog-CSerDPBA.js";import"./DraggableList-h5SWgWuf.js";import"./search-OfzKiz9h.js";import"./Input-BW0wlw1T.js";import"./useControlled-C-y7Ct0C.js";import"./Button-D0GlSb4-.js";import"./small-cross-Dg6oYX1r.js";import"./ActionButton-vLUx2x9T.js";import"./Checkbox-D_wcUVzM.js";import"./useValueChanged-Dkm3d1mT.js";import"./CollapsiblePanel-BfXlQFaO.js";import"./MultiColumnSortDialog-C_wapD0-.js";import"./MenuTrigger-XqvrfEp0.js";import"./CompositeItem-mpma5yoQ.js";import"./ToolbarRootContext-CoDK9tvS.js";import"./getDisabledMountTransitionStyles-kmT_SUYl.js";import"./getPseudoElementBounds-BFXXGwBb.js";import"./chevron-down-B1zztQ-L.js";import"./index-Dr1tBJwO.js";import"./error-DWxhuhX7.js";import"./BaseCbacBanner-ChJpqQ0G.js";import"./makeExternalStore-DCxwJsFe.js";import"./Tooltip-u5Tt69vN.js";import"./PopoverPopup-BaCxp5C7.js";import"./debounce-iJ8ACcNG.js";import"./useOsdkClient-TI1xoQcl.js";import"./tick-CTaqXIni.js";import"./DropdownField-BXlACZnb.js";import"./isEqual-BB0Cq2Xm.js";import"./withOsdkMetrics-JDMrgbFb.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
