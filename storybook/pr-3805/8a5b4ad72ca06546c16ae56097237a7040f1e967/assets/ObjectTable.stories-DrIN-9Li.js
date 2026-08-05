import{j as i}from"./iframe-BKT26ECK.js";import{O as p}from"./object-table-x2w3LtIb.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CvjyA8Lg.js";import"./preload-helper-fzvI_Owm.js";import"./Table-Cw4wO_Bs.js";import"./index-BJVY7skd.js";import"./Dialog-DhXyA_cn.js";import"./cross-BSfVnQTo.js";import"./svgIconContainer-JLeCzNrF.js";import"./useBaseUiId-CkXejorF.js";import"./InternalBackdrop-Ds1Vs2WH.js";import"./composite-B4I_gF8q.js";import"./index-t7JpEJ0Y.js";import"./index-B88WqkHq.js";import"./index-VrYGyuu7.js";import"./useEventCallback-sHZKw_gs.js";import"./SkeletonBar-D_t3Dt5n.js";import"./LoadingCell-DLgyQtl8.js";import"./ColumnConfigDialog-u9dv2Ly5.js";import"./DraggableList-DWL3tyoz.js";import"./search-Bf-ECdYs.js";import"./Input-CRHPegXc.js";import"./useControlled-XWGO9wxj.js";import"./isEqual-DMcuELws.js";import"./isObject-D2wJ0QdN.js";import"./Button-CoUSpzUJ.js";import"./ActionButton-wuhy4zvB.js";import"./Checkbox-CL3sZhbe.js";import"./useValueChanged-IHzUeZUw.js";import"./CollapsiblePanel-DhCcuAYe.js";import"./MultiColumnSortDialog-Bi50xfb7.js";import"./MenuTrigger-CyUGkSSs.js";import"./CompositeItem-DcxV0Jb0.js";import"./ToolbarRootContext-DwHWuq0m.js";import"./getDisabledMountTransitionStyles-S-dXebFE.js";import"./getPseudoElementBounds-CUK9mrPI.js";import"./chevron-down-Bndan05g.js";import"./index-e8V1myKy.js";import"./error-CRxd3DRb.js";import"./BaseCbacBanner-CYZysUWB.js";import"./makeExternalStore-CIXu0gOP.js";import"./Tooltip-oeF80ZMG.js";import"./PopoverPopup-CU0FrlBz.js";import"./toNumber-DsDar9qW.js";import"./useOsdkClient-D7HKqmcJ.js";import"./tick--T_SqTho.js";import"./DropdownField-DQPM9pPe.js";import"./withOsdkMetrics-c0sdVgaD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
