import{j as i}from"./iframe-Ct8R5TQf.js";import{O as p}from"./object-table-xRIBPBGx.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C6swro5H.js";import"./preload-helper-CmnAPtah.js";import"./Table-CHMoffmR.js";import"./index-BRgsegbN.js";import"./Dialog-sHJ-Lwpx.js";import"./cross-D1xZE6uN.js";import"./svgIconContainer-Duqk0EvN.js";import"./useBaseUiId-DoNgXT9k.js";import"./InternalBackdrop-CmAxUY43.js";import"./composite-Be4Z-niC.js";import"./index-BtTgSEhG.js";import"./index-4doTHW3z.js";import"./index-C1yjTJBR.js";import"./useEventCallback-BPwGWkYm.js";import"./SkeletonBar-D5z58f16.js";import"./LoadingCell-Dd9Y9O5K.js";import"./ColumnConfigDialog-VwsIjpmc.js";import"./DraggableList-BIPdkCGd.js";import"./search-CxT81SBo.js";import"./Input-887jmIgI.js";import"./useControlled-CKc1aHxj.js";import"./isEqual-B_1WvBBP.js";import"./isObject-DsLUKuNx.js";import"./Button-DAFBE6sk.js";import"./ActionButton-Dy803DLk.js";import"./Checkbox-C8Bm-09C.js";import"./useValueChanged-Dt5s7uy9.js";import"./CollapsiblePanel-CQSwWtqU.js";import"./MultiColumnSortDialog-C_BPKUJB.js";import"./MenuTrigger-B77a9xoL.js";import"./CompositeItem-sASbL7Ao.js";import"./ToolbarRootContext-BFoDjrVA.js";import"./getDisabledMountTransitionStyles-c53JuB2C.js";import"./getPseudoElementBounds-B19hTPqu.js";import"./chevron-down-hHedeX78.js";import"./index-B-_jawLE.js";import"./error-BzhSLAKe.js";import"./BaseCbacBanner-CZNuGQ2q.js";import"./makeExternalStore-D6qxd4Fu.js";import"./Tooltip-CEgxcaNi.js";import"./PopoverPopup-CD16ekSW.js";import"./toNumber-VtCCuLiZ.js";import"./useOsdkClient-r4aP_XEn.js";import"./tick-DY14VF5-.js";import"./DropdownField-CmEpGFBE.js";import"./withOsdkMetrics-DgiHV6Et.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
