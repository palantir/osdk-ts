import{j as i}from"./iframe-EjCpIKMB.js";import{O as p}from"./object-table-5fWdPkX7.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B_7t5LPM.js";import"./preload-helper-CIUDHQF8.js";import"./Table-Cmb2wjQa.js";import"./index-B5U3ePJq.js";import"./Dialog-DssNMNSz.js";import"./cross-CnLBVn_q.js";import"./svgIconContainer-CP-Ry2TB.js";import"./useBaseUiId-CK7LAaP5.js";import"./InternalBackdrop-CLd2i4Az.js";import"./composite-BNMQjeVI.js";import"./index-BtHapzj-.js";import"./index-BoU3FokU.js";import"./index-CEQCP6Rz.js";import"./useEventCallback-CiuEYM0E.js";import"./SkeletonBar-xLEjW6F1.js";import"./LoadingCell-CmPbThS_.js";import"./ColumnConfigDialog-DkxNN9Yc.js";import"./DraggableList-B18NmC-W.js";import"./search-BuWn_4CG.js";import"./Input-B6qHKpOm.js";import"./useControlled-C1-AcGB5.js";import"./Button-i8gsI8dS.js";import"./small-cross-BO3dC5CT.js";import"./ActionButton-D9fM6-Ow.js";import"./Checkbox-rkPeMWtn.js";import"./useValueChanged-BrI5qHq7.js";import"./CollapsiblePanel-CT_Zqu4L.js";import"./MultiColumnSortDialog-CLWNn6M_.js";import"./MenuTrigger-7vF3udgH.js";import"./CompositeItem-DMMDITMV.js";import"./ToolbarRootContext-D7y3n011.js";import"./getDisabledMountTransitionStyles-DU_IFslq.js";import"./getPseudoElementBounds-CftZdi9Z.js";import"./chevron-down-BryEDF54.js";import"./index-C86moaIy.js";import"./error-COq5rtPP.js";import"./BaseCbacBanner-CTsIoRnR.js";import"./makeExternalStore-C3iPT6jS.js";import"./Tooltip-DvfNwL5O.js";import"./PopoverPopup-Bln9dMkk.js";import"./debounce-iiPmlamn.js";import"./useOsdkClient-BzX-SVEP.js";import"./tick-BsXgJ5Ai.js";import"./DropdownField-G8plP5wa.js";import"./isEqual-Dlpp4WAb.js";import"./withOsdkMetrics-BFKxMYaV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
