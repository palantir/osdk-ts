import{j as i}from"./iframe-YKgGYsAZ.js";import{O as p}from"./object-table-BnMQXkv0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9gOtfHa.js";import"./preload-helper-DOUBWnCG.js";import"./Table-0BWYUg2X.js";import"./index-BSQIesNv.js";import"./Dialog-_bR5w0vP.js";import"./cross-Cy7yMOlh.js";import"./svgIconContainer-DjwSFEoB.js";import"./useBaseUiId-C9tw97PK.js";import"./InternalBackdrop-Beq4RY-j.js";import"./composite-9jEqfl-8.js";import"./index-Ckuqz5sJ.js";import"./index-Emhhftp8.js";import"./index-cwiYAG6F.js";import"./useEventCallback-epULuBlX.js";import"./SkeletonBar-D8RHKcwS.js";import"./LoadingCell-Jdekc-d0.js";import"./ColumnConfigDialog-BlLVglAQ.js";import"./DraggableList-SIkC03jl.js";import"./search-COrqTZFe.js";import"./Input-B20zbLtE.js";import"./useControlled-CMH4CusX.js";import"./isEqual-Brjs4Y_c.js";import"./isObject-DuvZSH3l.js";import"./Button-BYswp3H9.js";import"./ActionButton-Dl5vgnot.js";import"./Checkbox-BhgBtNGD.js";import"./useValueChanged-CBqj8w_B.js";import"./CollapsiblePanel-TiLuoxuM.js";import"./MultiColumnSortDialog-JK6Dm8Kk.js";import"./MenuTrigger-kRrWjUtP.js";import"./CompositeItem-D_aoMV-r.js";import"./ToolbarRootContext-C4AwY0JT.js";import"./getDisabledMountTransitionStyles-CxTm3pXi.js";import"./getPseudoElementBounds-wNQUm_MB.js";import"./chevron-down-e9aVtt1A.js";import"./index-DF281wZ_.js";import"./error-BF8Ij9Ca.js";import"./BaseCbacBanner-DPfQm9Xw.js";import"./makeExternalStore-B3R7PPWc.js";import"./Tooltip-CFc8dJ2d.js";import"./PopoverPopup-MHezIPJm.js";import"./toNumber-DFnR15ML.js";import"./useOsdkClient-Dvvaf_S-.js";import"./tick-C_9SKsFa.js";import"./DropdownField-CpZTqGJh.js";import"./withOsdkMetrics-4LWIzNT1.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
