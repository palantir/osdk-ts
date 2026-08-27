import{j as i}from"./iframe-DIrXRTUE.js";import{O as p}from"./object-table-CRY5KDOY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CMaj6xWH.js";import"./preload-helper-BDGKLWkc.js";import"./Table-CFLtyIaQ.js";import"./index-DXhTZYa-.js";import"./Dialog-j2P3qZPM.js";import"./cross-BWlnnw7Z.js";import"./svgIconContainer-BhiIhdyU.js";import"./useBaseUiId-DggC7k7V.js";import"./InternalBackdrop-BfLi8nYY.js";import"./composite-CQGrDifO.js";import"./index-DNNp_YhZ.js";import"./index-C7mJLSNN.js";import"./index-B7BSa3qz.js";import"./useEventCallback-4SGo8iHB.js";import"./SkeletonBar-CI1EKX4F.js";import"./LoadingCell-C1PJA3Gv.js";import"./ColumnConfigDialog-D5a1NblV.js";import"./DraggableList-RVApbcSr.js";import"./search-BiMWNAZT.js";import"./Input-xU7CCW7r.js";import"./useControlled-CY4zZ4Nk.js";import"./Button-CFV4ykZ5.js";import"./small-cross-k4fEusKy.js";import"./ActionButton-C_bnaXzs.js";import"./Checkbox-DKrbFOh9.js";import"./useValueChanged-DSwICwQ7.js";import"./CollapsiblePanel-BnW8cw5D.js";import"./MultiColumnSortDialog-B5VFtizY.js";import"./MenuTrigger--qPAsE0H.js";import"./CompositeItem-DZtzCGg4.js";import"./ToolbarRootContext-BwPH-v7H.js";import"./getDisabledMountTransitionStyles-B0733LGG.js";import"./getPseudoElementBounds-C8jaYsn8.js";import"./chevron-down-ClhW5Bkg.js";import"./index-CoHjJ82-.js";import"./error-Fw0nPuQ9.js";import"./BaseCbacBanner-BD1aE8di.js";import"./makeExternalStore-CfejnPp0.js";import"./Tooltip-C08q-0U3.js";import"./PopoverPopup-CUDI852N.js";import"./debounce-BROf-_gy.js";import"./useOsdkClient-CpLorJJf.js";import"./tick-Bk7NHXTh.js";import"./DropdownField-C91zL4eW.js";import"./isEqual-YCnWhj50.js";import"./withOsdkMetrics-BVdX0j6l.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
