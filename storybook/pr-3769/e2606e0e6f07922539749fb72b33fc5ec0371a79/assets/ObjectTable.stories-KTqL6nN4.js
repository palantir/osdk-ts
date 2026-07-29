import{j as i}from"./iframe-hzfvyDmq.js";import{O as p}from"./object-table-DDyvSrvK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-nQYrbIa4.js";import"./preload-helper-CdJNp2PB.js";import"./Table-S-qrfXrQ.js";import"./index-f5Cgh3Nq.js";import"./Dialog-CLxh-kiC.js";import"./cross-CRChT_Fc.js";import"./svgIconContainer-Cb51Sm7i.js";import"./useBaseUiId-DmC4LGoz.js";import"./InternalBackdrop-BkhlETTr.js";import"./composite-BH-1n-px.js";import"./index-B1JvKBAi.js";import"./index-BLrf7TRG.js";import"./index-ECL9pzkS.js";import"./useEventCallback-BVaqhbZv.js";import"./SkeletonBar-Cydm-_bj.js";import"./LoadingCell-CIwAhsfk.js";import"./ColumnConfigDialog-BHJtrFKi.js";import"./DraggableList-VIA38x-Z.js";import"./search-Cx-34oit.js";import"./Input-j4WQNWPZ.js";import"./useControlled-DAR7PUt5.js";import"./isEqual-B_G078b5.js";import"./isObject-OBBwB0n7.js";import"./Button-B5teW1fu.js";import"./ActionButton-BhhnarQt.js";import"./Checkbox-CHj0Mzen.js";import"./useValueChanged-DaH9it3g.js";import"./CollapsiblePanel-DK_WmK5Z.js";import"./MultiColumnSortDialog-DGuzWOGX.js";import"./MenuTrigger-D9MLuSAC.js";import"./CompositeItem-CjjHoPXP.js";import"./ToolbarRootContext-BGTK6XuR.js";import"./getDisabledMountTransitionStyles-Dr6IxA0r.js";import"./getPseudoElementBounds-DMqUJd8Q.js";import"./chevron-down-CrjOKJrn.js";import"./index-DO9rqWWH.js";import"./error-D9W8A-KQ.js";import"./BaseCbacBanner-RGAxCGDZ.js";import"./makeExternalStore-DOrHHMWU.js";import"./Tooltip-DcRW6kP6.js";import"./PopoverPopup-Bdz3Tdg1.js";import"./toNumber-BII_8Zj6.js";import"./useOsdkClient-BROt0Prz.js";import"./tick-BCoclWAx.js";import"./DropdownField-BhHBwio3.js";import"./withOsdkMetrics-u8-t1UQo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
