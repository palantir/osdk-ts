import{j as i}from"./iframe-C1V-jMWZ.js";import{O as p}from"./object-table-Bjyuc22o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CyyAi2d3.js";import"./preload-helper-CJz78Ui1.js";import"./Table-CMEtmKXI.js";import"./index-XvzsJt6X.js";import"./Dialog-3bWW0NjF.js";import"./cross-DeZPYttd.js";import"./svgIconContainer-DtEZy4uz.js";import"./useBaseUiId-CpkLkrsv.js";import"./InternalBackdrop-BnvKha4W.js";import"./composite-CHf1Zuon.js";import"./index-BxNUxb4e.js";import"./index-dKWUfAZT.js";import"./index-BwhYThVP.js";import"./useEventCallback-Bd_7eACD.js";import"./SkeletonBar-B6frXfeY.js";import"./LoadingCell-CFJNO3hd.js";import"./ColumnConfigDialog-BTm2ZS9L.js";import"./DraggableList-DXjfHO4P.js";import"./search-DDETT7aQ.js";import"./Input-JJCAZvBE.js";import"./useControlled-DOOaGi2X.js";import"./Button-B_XFbB5W.js";import"./small-cross-CvxomOO6.js";import"./ActionButton-eephJdo4.js";import"./Checkbox-CNuXvPoN.js";import"./useValueChanged-Dmqe1Ovy.js";import"./CollapsiblePanel-NwiHp10r.js";import"./MultiColumnSortDialog-DM98o6zQ.js";import"./MenuTrigger-Q7yK5Wz0.js";import"./CompositeItem-CJ-8czWx.js";import"./ToolbarRootContext-ChsX3fpL.js";import"./getDisabledMountTransitionStyles-Budio66N.js";import"./getPseudoElementBounds-5RQPQhG8.js";import"./chevron-down-BByq1bS3.js";import"./index-nUVRiP22.js";import"./error-BvMD1TOJ.js";import"./BaseCbacBanner-CNgYyNul.js";import"./makeExternalStore-RQ5jibpo.js";import"./Tooltip-Cw_JuZjL.js";import"./PopoverPopup-kQgVAtEr.js";import"./debounce-Ci2ufMQt.js";import"./useOsdkClient-GDIak-vt.js";import"./tick-B97Q10mL.js";import"./DropdownField-D_ZzXFne.js";import"./isEqual-D2Eks9zi.js";import"./withOsdkMetrics-BO4tQ83f.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
