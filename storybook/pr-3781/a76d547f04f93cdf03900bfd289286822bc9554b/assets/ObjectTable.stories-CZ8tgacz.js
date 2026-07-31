import{j as i}from"./iframe-CF2n_SwP.js";import{O as p}from"./object-table-Ws3ignoy.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D95M5YkJ.js";import"./preload-helper-DpkaM50o.js";import"./Table-CBr66Lo7.js";import"./index-D2CBKEtq.js";import"./Dialog-DLnTIYpe.js";import"./cross-BHNzOWs1.js";import"./svgIconContainer-U4yJEvCA.js";import"./useBaseUiId-JH9EwjdR.js";import"./InternalBackdrop-CFqIHn15.js";import"./composite-DZIjbJPA.js";import"./index-BidtJzDD.js";import"./index-CgTL-8g-.js";import"./index-Cw8Yhhfu.js";import"./useEventCallback-5QX3oL2W.js";import"./SkeletonBar-cM1CrOuj.js";import"./LoadingCell-_kLrmdk5.js";import"./ColumnConfigDialog-Czn5LnnR.js";import"./DraggableList-0yBygflh.js";import"./search-Bdvx3ZDa.js";import"./Input-CGJrCa5R.js";import"./useControlled-DmmVigSV.js";import"./isEqual-CKx_5yvK.js";import"./isObject-DJupl0Bh.js";import"./Button-C3HVqe_G.js";import"./ActionButton-BH97OqGs.js";import"./Checkbox-D_I3fajL.js";import"./useValueChanged-sT6XHa_c.js";import"./CollapsiblePanel-yV7ZG1oY.js";import"./MultiColumnSortDialog-BBJiA0Gy.js";import"./MenuTrigger-Ck_tS7HF.js";import"./CompositeItem-WiSS-79O.js";import"./ToolbarRootContext-BMZZpRhf.js";import"./getDisabledMountTransitionStyles-Ch5qDZKW.js";import"./getPseudoElementBounds-vz9Xk0s1.js";import"./chevron-down-DX2JC5eM.js";import"./index-ExDoAjE3.js";import"./error-Dbf0LG0M.js";import"./BaseCbacBanner-DSQTVBGe.js";import"./makeExternalStore-CKv8i6Rr.js";import"./Tooltip-CHLCRTGv.js";import"./PopoverPopup-BOqiFA9Z.js";import"./toNumber-CWEJRA8Y.js";import"./useOsdkClient-CjY8fwPh.js";import"./tick-DTwY1UVD.js";import"./DropdownField-BVuM_ctV.js";import"./withOsdkMetrics-nsN9tDQx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
