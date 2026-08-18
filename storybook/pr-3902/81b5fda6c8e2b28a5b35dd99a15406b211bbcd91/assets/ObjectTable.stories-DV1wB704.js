import{j as i}from"./iframe-DabUi6cR.js";import{O as p}from"./object-table-ymMlcQgH.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-q7CMti3C.js";import"./preload-helper-PB9vrEtI.js";import"./Table-DFKaFrlP.js";import"./index-KZryrGBD.js";import"./Dialog-Bd5BvEg0.js";import"./cross-DpDPaZbd.js";import"./svgIconContainer-Cp8yewAh.js";import"./useBaseUiId-BcNRpk_N.js";import"./InternalBackdrop-BiZjaMMl.js";import"./composite-UkAyjKG8.js";import"./index-CwspG28F.js";import"./index-BAuYPfKF.js";import"./index-Dya5ymfL.js";import"./useEventCallback-DiBk_LO1.js";import"./SkeletonBar-BGVqshhW.js";import"./LoadingCell-WvDyMqYo.js";import"./ColumnConfigDialog-D8-TlFTa.js";import"./DraggableList-B34GVoSc.js";import"./search-D7BhxQDO.js";import"./Input-DrQQ_TlW.js";import"./useControlled-B3zNFnxK.js";import"./Button-CKSInnXQ.js";import"./small-cross-CVw0DqOB.js";import"./ActionButton-CdLhG2br.js";import"./Checkbox-CuTNiBRG.js";import"./useValueChanged-DXzV-qE-.js";import"./CollapsiblePanel-B8htkGGF.js";import"./MultiColumnSortDialog-CLe_WPlF.js";import"./MenuTrigger-CD41BN-2.js";import"./CompositeItem-B-6r7oQp.js";import"./ToolbarRootContext-B5UjH-Re.js";import"./getDisabledMountTransitionStyles-D6QtuiIc.js";import"./getPseudoElementBounds-BiAo1PpW.js";import"./chevron-down-D7NMZO3V.js";import"./index-CWyEHriK.js";import"./error-DzTcu7K-.js";import"./BaseCbacBanner-CyTcZJb2.js";import"./makeExternalStore-BVTB5n8V.js";import"./Tooltip-Cq_bI-7a.js";import"./PopoverPopup-8lBrunDg.js";import"./debounce-Bk1lW-Sn.js";import"./useOsdkClient-BKe3IUPd.js";import"./tick-DycZFHqw.js";import"./DropdownField-FDF5bp47.js";import"./isEqual-BT_PX-GP.js";import"./withOsdkMetrics-DxxH3flz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
