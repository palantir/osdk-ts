import{j as i}from"./iframe-qlavKhcC.js";import{O as p}from"./object-table-DhiZdnvj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-sRwCYgRg.js";import"./preload-helper-C1Px9yiL.js";import"./Table-DbQ4W-EG.js";import"./index-B67iUNS7.js";import"./Dialog-BY4Z7Ubb.js";import"./cross-_jhIc_Zd.js";import"./svgIconContainer-B4I2H2FD.js";import"./useBaseUiId-D99Is1tN.js";import"./InternalBackdrop-CstziURT.js";import"./composite-BRoxV9_z.js";import"./index-Br0Vgd-J.js";import"./index-ZYLeOkr2.js";import"./index-DQnoF5JT.js";import"./useEventCallback-BOOCKsQK.js";import"./SkeletonBar-BIIetOih.js";import"./LoadingCell-BNdMNVbo.js";import"./ColumnConfigDialog-Cnx4R8p0.js";import"./DraggableList-CfQeV_Eu.js";import"./search-UuNwtUH-.js";import"./Input-CtY9R5P4.js";import"./useControlled-DfaRfuwf.js";import"./Button-r2aYddAL.js";import"./small-cross-BiYV0tez.js";import"./ActionButton-CnFjisnJ.js";import"./Checkbox-BQbg4nhN.js";import"./useValueChanged-BTXhrJc6.js";import"./CollapsiblePanel-c5DyBahg.js";import"./MultiColumnSortDialog-BREwVqvQ.js";import"./MenuTrigger-CMkq6Pon.js";import"./CompositeItem-DQfjGBA0.js";import"./ToolbarRootContext-CciloOLN.js";import"./getDisabledMountTransitionStyles-CQfW0Yzy.js";import"./getPseudoElementBounds-BG6WHPgG.js";import"./chevron-down-CeWg8uEU.js";import"./index-8MYCUco8.js";import"./error-DGVK5Ulu.js";import"./BaseCbacBanner-sBOnvXxB.js";import"./makeExternalStore-DOTLplCc.js";import"./Tooltip-DipLFS6Y.js";import"./PopoverPopup-Cm3EjpO-.js";import"./debounce-CvczMDGy.js";import"./useOsdkClient-ByR-C6Rs.js";import"./tick-BlSBD_8E.js";import"./DropdownField-TZaSBJ1a.js";import"./isEqual-Dh5UEpaX.js";import"./withOsdkMetrics-EXt5SwEJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
