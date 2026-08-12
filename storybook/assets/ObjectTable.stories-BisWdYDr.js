import{j as i}from"./iframe-BUQyUD8m.js";import{O as p}from"./object-table-Ds9LqJDs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-oOH_4Zlw.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-CrxmGslj.js";import"./index-BICsXjCE.js";import"./Dialog-Cicf7a4d.js";import"./cross-1uLQRGRH.js";import"./svgIconContainer-o4oAXi-V.js";import"./useBaseUiId-U_k4td6p.js";import"./InternalBackdrop-ClRX3Efv.js";import"./composite-CELzk-qp.js";import"./index-BurFCGWb.js";import"./index-4mhiFuK4.js";import"./index-_XREHo1x.js";import"./useEventCallback-Dj7v-W5e.js";import"./SkeletonBar-kkhCK0VO.js";import"./LoadingCell-VGLxO3xD.js";import"./ColumnConfigDialog-Dx4DSbQ8.js";import"./DraggableList-BV4M3Ozp.js";import"./search-DagSNO5e.js";import"./Input-CtsEUXGl.js";import"./useControlled-CPowlOFs.js";import"./isEqual-DXPWwiqu.js";import"./isObject-BxdRw410.js";import"./Button-DEbL0EP0.js";import"./ActionButton--7yshnrs.js";import"./Checkbox-CW-A1aF1.js";import"./useValueChanged-Bc7io6Ho.js";import"./CollapsiblePanel-CNXYFAyn.js";import"./MultiColumnSortDialog-5NdKS9sN.js";import"./MenuTrigger-M7-KqOvt.js";import"./CompositeItem-iT1BpgJw.js";import"./ToolbarRootContext-CxUHg0mL.js";import"./getDisabledMountTransitionStyles-B8Q4G4Fv.js";import"./getPseudoElementBounds-XI3ORFf2.js";import"./chevron-down-DiBQFFuK.js";import"./index-CvJx8Lxg.js";import"./error-TXaSC1XE.js";import"./BaseCbacBanner--ZmoOtG1.js";import"./makeExternalStore-7rJI6eRL.js";import"./Tooltip-Dvh5BE71.js";import"./PopoverPopup-DAQjKvSK.js";import"./toNumber-BpqP-OeJ.js";import"./useOsdkClient-DrmKPxO2.js";import"./tick--S61-hA-.js";import"./DropdownField-9xytAn4v.js";import"./withOsdkMetrics-Pgtowb3-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
